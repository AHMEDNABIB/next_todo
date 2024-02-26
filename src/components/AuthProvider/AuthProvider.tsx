import React from 'react';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaDiscord } from 'react-icons/fa';

const AuthProviders = () => {
return (
    <div>
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
        </div> 
    </div>
)}
export default AuthProviders;