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
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
