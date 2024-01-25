import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

type User = {
	email: string;
	password: string;
};

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				if (
					!credentials ||
					!credentials.email ||
					!credentials.password
				) {
					console.log("error in credentials");
					return null;
				}
				try {
					const response = await fetch(
						"http://localhost:5000/api/user/login",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								email: credentials.email,
								password: credentials.password,
							}),
						}
					);

					if (response.ok) {
						const data = await response.json();

						return data;
					} else {
						console.error("Login failed");
						return null;
					}
				} catch (error) {
					console.error("Error during login:", error);
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
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID!,
			clientSecret: process.env.DISCORD_CLIENT_SECRET!,
		}),
	],
	// secret: process.env.JWT_SECRET,
};

const callbacks = {
	jwt: ({ token, user, trigger, session }: any) => {
		if (trigger === "update") {
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
		if (token) {
			// eslint-disable-next-line no-param-reassign
			session = { ...session, user: token };
		}
		// console.log(session);
		return session;
	},
};

const options = {
	providers: authOptions.providers,
	callbacks,

	pages: {
		signIn: "/login",
		error: "/login",
	},
};

const authHandler = (req: NextApiRequest, res: NextApiResponse) =>
	NextAuth(req, res, options);

export default authHandler;
