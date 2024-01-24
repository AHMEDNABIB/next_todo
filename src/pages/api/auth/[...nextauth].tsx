import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from 'next';

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
            console.log(data);
            const accessToken = data.accessToken;
            
            return data;
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
  // secret: process.env.JWT_SECRET,
};

const callbacks = {
  jwt: ({ token, user, trigger, session }: any) => {
    if (trigger === 'update') {
      // eslint-disable-next-line no-param-reassign
      token = { ...token, ...session };
    }

    if (user) {
      // eslint-disable-next-line no-param-reassign
      token = { ...token, ...user.data };
    }

    return token;
  },
  session: ({ session, token }: any) => {
    // console.log(session);

    if (token) {
      // eslint-disable-next-line no-param-reassign
      session = { ...session, user: token };
    }

    return session;
  },
};

const options = {
  providers: authOptions.providers,
  callbacks,

  pages: {
    signIn: '/login',
    error: '/login',
  },
};

const authHandler = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default authHandler;
