"use client";
import React, { useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const {data: session}=useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(session);


    const handleLogin = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
  
        if (response.ok) {
          const data = response.json;
          console.log(data);
          console.log('Login successful');
          router.push('/');
        } else {
          console.error('Login failed');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded-md p-2"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            /> 
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            onClick={(e)=>{
              e.preventDefault();
              handleLogin();
            }}
          >
            Login
          </button>
        </form>
        <div className="mt-6 flex items-center justify-between">
          <div className="bg-blue-300 text-blue py-2 px-4 rounded-md hover:bg-blue-600">
            <button onClick={()=>signIn('google')}>google</button>
          </div>
          <div className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            <button onClick={() => signIn('facebook')}>Facebook</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
