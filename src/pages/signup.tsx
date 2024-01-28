"use client";
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import AuthProviders from '@/components/AuthProvider/AuthProvider';
import useSignUp from '@/hooks/useSignUp';

const SignUp = () => {
  const router = useRouter();
  const { name, setName, email, setEmail, password, setPassword, error, handleSignUp } = useSignUp();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 w-full">
      <div className="bg-white p-20 rounded shadow-md lg:w-2/5">
        <h2 className="text-2xl font-bold mb-6 flex items-center justify-center text-green-600">Create new account</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="email"
              id="name"
              name="name"
              className="w-full border rounded-md p-2"
              placeholder="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded-md p-2"
              placeholder="Your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border rounded-md p-2"
              placeholder="Add password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            /> 
          </div>
          <div className="error-message text-red-500">{error}</div>
          <button
            type="submit"
            className="bg-green-400 text-white py-2 px-4 rounded-md hover:bg-green-500 w-full"
            onClick={(e)=>{
              e.preventDefault();
              handleSignUp().then((result)=>{
                if(result){
                  router.push('/login');
                }
              });
            }}
          >
            Create Account
          </button>
        </form>
        <AuthProviders/>
        <div className="mt-4 text-blue-500 hover:underline cursor-pointer text-green-600 flex items-center justify-center">
          <Link href="/login">already have an account?</Link>
        </div>     
      </div>
    </div>

  );
};

export default SignUp;
