import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config'
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const googleProivder = new GoogleAuthProvider();
    //register
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //signin
    const singin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //with google
    const withGoogle = ()=> {
        setLoading(true);
        return signInWithPopup(auth, googleProivder)
    }
    //signout
    const logOut = ()=> {
        setLoading(true);
        return signOut(auth);
    }
    //observer
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser)
            setLoading(false);
        });
        return ()=> unsubscribe();
    },[])
    const authInfo = { user, register, singin, withGoogle, logOut, loading };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;