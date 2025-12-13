import React, { useState } from 'react';

const LoginSignup = () => {
  const [signIn, setSignIn] = useState(true);

  return (
    <div className="bg-gray-200 h-[89vh] flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {signIn ? 'Sign In' : 'Create Account'}
          </h2>
          <button
            className="text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={() => setSignIn(!signIn)}
          >
            {signIn ? 'Create Account' : 'Sign In'}
          </button>
        </div>
        <div className="px-6 py-4">
          {signIn ? (
            <form>
              <h1 className="font-bold text-2xl mb-4">Sign In</h1>
              <input
                className="bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg py-2 px-4 block w-full appearance-none"
                type="email"
                placeholder="Email"
              />
              <input
                className="bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg py-2 px-4 block w-full mt-4 appearance-none"
                type="password"
                placeholder="Password"
              />
              <button
                className="bg-black text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </form>
          ) : (
            <form>
              <h1 className="font-bold text-2xl mb-4">Create Account</h1>
              <input
                className="bg-gray-100 border-2 border-gray-300 focus:outline-none rounded-lg py-2 px-4 block w-full appearance-none"
                type="text"
                placeholder="Name"
              />
              <input
                className="bg-gray-100 border-2 border-gray-300 focus:outline-none rounded-lg py-2 px-4 block w-full mt-4 appearance-none"
                type="email"
                placeholder="Email"
              />
              <input
                className="bg-gray-100 border-2 border-gray-300 focus:outline-none rounded-lg py-2 px-4 block w-full mt-4 appearance-none"
                type="password"
                placeholder="Password"
              />
              <button
                className="bg-black text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
