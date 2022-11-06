import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
      <div className="flex justify-center items-center my-20">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 border border-red-400 dark:bg-gray-900 dark:text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Register</h1>
            <p className="text-sm dark:text-gray-400">Create a account</p>
          </div>
          <form
            novalidate=""
            action=""
            className="space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label for="name" className="block mb-2 text-sm">
                  Your Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
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
                  type="button"
                  className="w-full px-8 py-3 font-semibold rounded-md btn btn-error"
                >
                  Register
                </button>
              </div>
              <p className="px-6 text-sm text-center dark:text-gray-400">
                already have a account?
                <Link
                  rel="noopener noreferrer"
                  to="/signin"
                  className="hover:underline dark:text-violet-400"
                >
                  Sign in
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Register;