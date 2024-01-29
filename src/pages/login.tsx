"use client";
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import AuthProviders from '@/components/AuthProvider/AuthProvider';
import useLogin from '@/hooks/useUser';
import InputArea from '@/components/form/inputArea';



const Login = () => {
  const router = useRouter();
  const { handleSubmit,onSubmit,register,handleLogin,email, setEmail, password, setPassword, rememberMe, setRememberMe, emailError, passwordError, loginError} = useLogin();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 w-full">
      <div className="bg-white  p-20 rounded shadow-md lg:w-2/5">
        <h2 className="text-2xl font-bold mb-6 flex items-center justify-center text-green-600">Login to your account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputArea
            register={register}
            // required={true}
            name='email'
            label='Email'
            type='email'
            placeholder='Enter Email'
            // disable={false}
            id='email'

          />
          <InputArea
          register={register}
          name='password'
          label='Password'
          type='password'
          placeholder='Enter Password'
          id='password'
          />
          {/* <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Your email
            </label>
            <div className="error-message text-red-500">{emailError}</div>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded-md p-2"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div> */}
          {/* <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <div className="error-message text-red-500">{passwordError}</div>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border rounded-md p-2"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            /> 
          </div> */}
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
          <div className="error-message text-red-500">{loginError}</div>
          <button
            type="submit"
            className="bg-green-400 text-white py-2 px-4 rounded-md hover:bg-green-500 w-full"
            // onClick={(e)=>{
            //   e.preventDefault();
            //   handleLogin().then((result)=>{
            //     if(result){
            //       router.push('/');
            //     }
            //   });
            // }}
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
