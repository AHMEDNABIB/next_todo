import React from 'react';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';


const Logout = () => {
  const router = useRouter();

  const handleLogout = async() => {
    signOut();
    router.push('/login'); 
  };

  return (
    <button onClick={handleLogout}
    className="w-48 bg-red-500 rounded-lg py-2 px-4 text-white cursor-pointer block mx-auto"
    >
      Logout
    </button>
  );
};

export default Logout;
