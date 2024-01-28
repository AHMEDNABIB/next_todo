import { useState } from "react";

const useSignUp=  () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        try {
          if( !name || !email || !password ){
            setError('There was a problem with your submission. Please review  the fields above!')
          }
            const response = await fetch(process.env.SIGNUP_API!, {
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
                return response.json();
            } else {
              console.error('Login failed');
              return null;
            }
          } catch (error) {
            console.error('Error during login:', error);
            return null;
          }
      };
      return {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        error,
        handleSignUp,
    };
};
export default useSignUp;
