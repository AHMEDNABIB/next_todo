import { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { useRouter } from "next/router";


const useUser=  () => {
    const {register, handleSubmit} = useForm();
    const router = useRouter();

    const onSubmit:SubmitHandler<FieldValues> = async(data) =>{
      const {email, password, name} = data;
      try {
        if(name){
          
          if( !name || !email || !password ){
            // setError('There was a problem with your submission. Please review  the fields above!')
          }
            const response = await fetch(process.env.NEXT_PUBLIC_SIGNUP_API!, {
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
        }
        else{
          if(!email || !password){
            if (!email) {
              // setEmailError('Email is required');
            }
            if (!password) {
              // setPasswordError('Password is required');
            }
            return;
          }
          const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
          });
      
          if (result && !result.error) {
            router.push('/');
            return result;
          } else {
            // setLoginError('Login failed!')
            console.error('Login failed:', result?.error || 'Unknown error');
          }
        }
        
      } catch (error) {
        console.error('Error during login:', error);
      }
    }
      return {
        register,
        onSubmit,
        handleSubmit
    };
};
export default useUser;
