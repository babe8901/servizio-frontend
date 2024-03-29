import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Header />
      <div className='min-h-full bg-black flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <img
              className='mx-auto h-12 w-auto'
              src={require("../logo.jpg")}
              alt='Workflow'
            />
            <h2 className='mt-6 text-center text-3xl font-extrabold text-white'>
              Sign in to your account
            </h2>
          </div>
          <form
            className='mt-8 space-y-6'
            action='http://localhost:5000/api/v1/auth/login'
            method='POST'
          >
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
              <div className='py-2'>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Email address'
                />
              </div>
              <div className='py-2'>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Password'
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                />
                <label
                  htmlFor='remember-me'
                  className='ml-2 block text-sm text-white'
                >
                  Remember me
                </label>
              </div>

              <div className='text-sm'>
                <a
                  href='#'
                  className='font-medium text-indigo-600 hover:text-indigo-500'
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                  <LockClosedIcon
                    className='h-5 w-5 text-indigo-900 group-hover:text-indigo-400'
                    aria-hidden='true'
                  />
                </span>
                Sign in
              </button>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <label
                  htmlFor='remember-me'
                  className='ml-2 block text-sm text-white'
                >
                  Not Registered?
                </label>
              </div>

              <div className='text-sm'>
                <Link to='/register'>
                  <a
                    href='/register'
                    className='font-medium text-indigo-600 hover:text-indigo-500'
                  >
                    Register
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
