import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from "next-auth/providers/credentials";

type User = {
  email: string;
  password: string;
};

export const authOptions = {
  
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if(!credentials || !credentials.email || !credentials.password){
          console.log('error in credentials');
          return null;
        }
        try {
          const response = await fetch('http://localhost:3001/api/user/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email:credentials.email,
              password:credentials.password
            }),
          });
    
          if (response.ok) {
            const data = await response.json();
            const accessToken = data.accessToken;
            console.log('access Token:' , accessToken);
            console.log('Login successful');
            return(data);
          } else {
            console.error('Login failed');
            return null;
          }
        } catch (error) {
          console.error('Error during login:', error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
