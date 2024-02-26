"use client";
import React from 'react';
import Link from 'next/link';
import AuthProviders from '@/components/AuthProvider/AuthProvider';
import useUser from '@/hooks/useUser';
import InputArea from '@/components/form/inputArea';

const Login = () => {
  const { handleSubmit, onSubmit, register, formState } = useUser();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 w-full">
      <div className="bg-white  p-20 rounded shadow-md lg:w-2/5">
        <h2 className="text-2xl font-bold mb-6 flex items-center justify-center text-green-600">Login to your account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputArea
            register={register}
            name='email'
            label='Email'
            type='email'
            placeholder='Enter Email'
            id='email'
            error={formState.errors.email}
          />
          <InputArea
          register={register}
          name='password'
          label='Password'
          type='password'
          placeholder='Enter Password'
          id='password'
          error={formState.errors.password}
          />
          
          <div className="flex">
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
              />
              <label htmlFor="rememberMe" className="text-gray-700 ml-2">
                Remember me
              </label>
            </div>
            <div className="mb-4 text-blue-500 hover:underline cursor-pointer ml-auto">
              <a href="">Forgot Password?</a>
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-400 text-white py-2 px-4 rounded-md hover:bg-green-500 w-full"
          >
            Login
          </button>
        </form>
        <AuthProviders/>
        <div className="mt-4 text-blue-500 hover:underline cursor-pointer text-green-600 flex items-center justify-center">
          <Link href="/signup">create new account?</Link>
        </div>      
      </div>
    </div>

  );
};

export default Login;
