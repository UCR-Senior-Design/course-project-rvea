import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { connectToDatabase } from './app/connectdb';

async function getUser(email, password) {
    try {
        const db = await connectToDatabase();

        //Register as prof: ___@prof.edu
        let user;
        //let acct_type;
        if (email.includes("prof")) {
            user = await db.collection("Professor").find({ "Email": email }).toArray();
            //acct_type = "professor"
        }
        //Register as student: ___@student.edu
        else if (email.includes("student")) {
            user = await db.collection("Student").find({ "Email": email }).toArray();
            //acct_type = "student"
        }
        user = (user.length ? user[0] : 0);

        if (user && password == user.password) {
            console.log("User found:", user); // Log the user object
            return { email, "name": user.Username, "isStudent": user.isStudent};
        }
        else {
            return null;
        }
    }
    catch (error) {
        console.log("Error retrieving user:", error); // Log any errors
        return null;
    }
}


export const authOptions = {
    providers: [
        Credentials({
            async authorize(credentials) {
                const email = credentials.email;
                const password = credentials.password;
                const isStudent = credentials.isStudent
                const user = await getUser(email, password);
                return user;
            }
        })],
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    ...authOptions,
});