import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthProvider';

const SignIn = () => {
  const { singin, withGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handalSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    singin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const CurrentUser = {
          email: user?.email,
        }
        fetch("https://blood-donation-camp-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(CurrentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            //notbest pratices
            localStorage.setItem('blood-donaiton', data.token);
            navigate(from, { replace: true });
            form.reset();
            toast.success("Successfully Signin!");
          });
        
      })
      .then((err) => console.log(err));
  };
  //with google
  const handalGoogle = () => {
    withGoogle()
      .then((result) => {
        const user = result.user;
        const CurrentUser = {
          email: user?.email,
        };
        fetch("https://blood-donation-camp-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(CurrentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            //notbest pratices
            localStorage.setItem("blood-donaiton", data.token);
            navigate(from, { replace: true });
            
            toast.success("Successfully Login With Google!");
          });
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="flex justify-center items-center my-20 pb-10">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 border border-red-400 dark:bg-gray-900 dark:text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handalSignIn}
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label for="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border border-gray-400 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label for="password" className="text-sm">
                  Password
                </label>
                <Link
                  rel="noopener noreferrer"
                  to="#"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border border-gray-400 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md btn btn-error"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">
              New in Blood Donation Camp?
              <Link
                rel="noopener noreferrer"
                to="/register"
                className="hover:underline text-secondary"
              >
                Register Now
              </Link>
            </p>
          </div>
        </form>
        <div>
          <button
          onClick={handalGoogle}
            type="button"
            className="w-full px-8 py-3 mt-3 font-semibold rounded-md btn btn-warning"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;