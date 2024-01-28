import { signIn } from "next-auth/react";
import { useState } from "react";

const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLogin = async () => {
        try {
            if(!email || !password){
              if (!email) {
                setEmailError('Email is required');
              }
              if (!password) {
                setPasswordError('Password is required');
              }
              return;
            }
            
            const result = await signIn('credentials', {
              redirect: false,
              email,
              password,
            });
        
            if (result && !result.error) {
              return result;
            } else {
              setLoginError('Login failed!')
              console.error('Login failed:', result?.error || 'Unknown error');
            }
          } catch (error) {
            console.error('Error during login:', error);
          }
    }
    return {
        email,
        setEmail,
        password,
        setPassword,
        rememberMe,
        setRememberMe,
        emailError,
        passwordError,
        loginError,
        handleLogin
    };
}
export default useLogin;