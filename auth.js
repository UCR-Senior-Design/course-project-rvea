import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { connectToDatabase } from './app/connectdb';

async function getUser(email, password) {
    try {
        const db = await connectToDatabase();
        let user = await db.collection("Student").find({ "Email": email }).toArray();
        if (user.length == 0) {
            user = await db.collection("Professor").find({ "Email": email }).toArray();
        }
        user = (user.length ? user[0] : 0);

        if (user && password == user.password) {
            console.log("User found:", user); // Log the user object
            return { email, "name": user.Username, "isStudent": user.isStudent};
        }

        if (user && password === user.password) {
            console.log("User found:", user); // Log the user object
            return { email, "name": user.Username, "isStudent": user.isStudent };
        } else {
            console.log("User not found or password incorrect");
            return null;
        }
    } catch (error) {
        console.log("Error retrieving user:", error); // Log any errors
        return null;
    }
}


export const authOptions = {
    providers: [
        Credentials({
            async authorize(credentials, auth) {
                const email = credentials.email;
                const password = credentials.password;
                // Define the user variable
                let user = null;
                try {
                    user = await getUser(email, password);

                    console.log("Auth user:", auth.user);
                    console.log("Auth user isstudent?:", auth.user?.isStudent);

                    // Fetch additional user information from API or database
                    // For example:
                    // const userInfo = await fetchUserInfo(email); // Assuming user has an id field
                    // user.name = userInfo.name;
                    // user.isStudent = userInfo.isStudent;
                } catch (error) {
                    console.error("Error fetching user:", error);
                    // Handle error appropriately
                }
                return user;
            }
        })],
}


export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    ...authOptions,
});
