"use client";
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FaFacebook,FaDiscord } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name:name,
            email:email,
            password:password
          }),
        });
  
        if (response.ok) {
            router.push('/login');
        } else {
          console.error('Login failed');
          return null;
        }
      } catch (error) {
        console.error('Error during login:', error);
        return null;
      }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 w-full">
      <div className="bg-white p-20 rounded shadow-md lg:w-2/5">
        <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">Create new account</h2>
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
          <button
            type="submit"
            className="bg-green-400 text-white py-2 px-4 rounded-md hover:bg-green-500 w-full"
            onClick={(e)=>{
              e.preventDefault();
              handleSignUp();
            }}
          >
            Create Account
          </button>
        </form>
        <div className="mt-6 flex items-center">
          <div className="flex-1 border-t-2 border-gray-400"></div>
          <p className="mx-4 text-black-500">sign in with</p>
          <div className="flex-1 border-t-2 border-gray-400"></div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between">
          <div className=" w-full border-gray-500 border py-2 px-4 rounded-md hover:border-gray-600 flex items-center justify-center mb-2">
          <button className="flex items-center" onClick={() => signIn('google', { callbackUrl: '/' })}><FcGoogle className="mr-2" /> Google</button>
          </div>
          <div className=" w-full border-gray-500 border py-2 px-4 rounded-md hover:border-gray-600 flex items-center justify-center mb-2">
            <button className="flex items-center" onClick={() => signIn('facebook', { callbackUrl: '/' })}><FaFacebook className="mr-2 text-blue-500" /> Facebook</button>
          </div>
          <div className=" w-full border-gray-500 border py-2 px-4 rounded-md hover:border-gray-600 flex items-center justify-center">
          <button className="flex items-center" onClick={() => signIn('discord', { callbackUrl: '/' })}><FaDiscord className="mr-2 text-blue-600" /> Discord</button>
          </div>
          <div className="mt-4 text-blue-500 hover:underline cursor-pointer">
            <Link href="/login">already have an account?</Link>
          </div>
        </div>        
      </div>
    </div>

  );
};

export default SignUp;
