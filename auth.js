import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { promises as fs } from "fs";

async function getUser(email) {
    const file = await fs.readFile(process.cwd() + "/json/usersMockData.json", "utf-8");
    const users = JSON.parse(file).users;

    if (email in users) {
        return {email, password: users[email]};
    }
    else {
        return null;
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const email = credentials.email;
                const password = credentials.password;
                const user = await getUser(email);
                return user; 
            }
        })],
});