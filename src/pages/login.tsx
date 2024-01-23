"use client";
import React, { useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';


const Login = () => {
  const router = useRouter();
  const {data: session}=useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);


  // console.log(session);


  const handleLogin = async () => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
  
      if (result && !result.error) {
        console.log('Login successful');
        console.log(result);
        router.push('/');
      } else {
        console.error('Login failed:', result?.error || 'Unknown error');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 w-full">
      <div className="bg-white p-20 rounded shadow-md w-2/5">
        <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">Login to your account</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Your email
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
          <div className="flex">
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
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
            className="bg-green-400 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
            onClick={(e)=>{
              e.preventDefault();
              handleLogin();
            }}
          >
            Login
          </button>
        </form>
        <div className="mt-6 flex items-center">
          <div className="flex-1 border-t-2 border-gray-400"></div>
          <p className="mx-4 text-black-500">or</p>
          <div className="flex-1 border-t-2 border-gray-400"></div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between">
          <div className="w-full bg-blue-500 text-blue py-2 px-4 rounded-md hover:bg-blue-600 flex items-center justify-center mb-2">
            <button onClick={() => signIn('facebook')}>Log in with Facebook</button>
          </div>
          <div className="w-full bg-blue-500 text-blue py-2 px-4 rounded-md hover:bg-blue-600 flex items-center justify-center">
          <button onClick={() => signIn('google')}>Log in with Google</button>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default Login;
