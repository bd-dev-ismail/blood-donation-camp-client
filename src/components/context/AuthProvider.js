import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import app from '../../firebase/firebase.config'
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const user = {displayName: 'Ismail'}

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const authInfo = { user, register };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;