import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { promises as fs } from "fs";
import { connectToDatabase } from './app/connectdb';

async function getUser(email, password) {
    try {
        const db = await connectToDatabase();
        let user = await db.collection("Student").find({"Email" : email}).toArray();
        user = (user.length ? user[0] : 0);

        if (user && password == user.password) {
            return { email, password: user[email] };
        }
        else {
            return null;
        }
    }
    catch {
        console.log("error with signing in a user");
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const email = credentials.email;
                const password = credentials.password;
                const user = await getUser(email, password);
                return user;
            }
        })],
});