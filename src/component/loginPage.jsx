// src/Login.js
import React, { useState } from 'react';
import Dashboard from '../pages/Dashboard';
import '../assets/login.jpg'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Hardcoded credentials
  const hardcodedUser = {
    email: 'user@example.com',
    password: 'zack1911',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if credentials match
    if (email === hardcodedUser.email && password === hardcodedUser.password) {
      setIsLoggedIn(true); // Successful login
      setErrorMessage(''); // Clear error message
    } else {
      setErrorMessage('Invalid email or password'); // Show error message
    }
  };

  // If user is logged in, render the Dashboard component
  if (isLoggedIn) {
    return <Dashboard/>;
  }

  return (
    <div className="min-h-screen  bg-gray-100 flex  items-center justify-center ">
        <div className="bg-white p-8 rounded-lg  max-w-md w-full flex flex-col gap-6 shadow-slate-500 shadow-2xl h-fit">
        <h2 className="text-3xl font-bold  text-center">Login</h2>
        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className='flex flex-col gap-6 '>
          <div className=" flex flex-col gap-4 items-start">
            <label className="block text-gray-700 text-sm font-bold " htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-4 items-start">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-[#0c1846] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
