'use server'

import { signIn } from '../../auth';
import { AuthError } from 'next-auth';
import { connectToDatabase } from '../connectdb';
import { ObjectId } from 'mongodb';

export async function authenticate(prevState, formData) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
};

export async function saveProfessorInfo(mode, profileInfo) {
    if (mode == 0) return;
    try {
        const db = await connectToDatabase();
        const filter = { _id: new ObjectId(profileInfo._id)};
        const updateDoc = {
            $set: {
                email: profileInfo.email,
                phone_number: profileInfo.phone_number,
                pronouns: profileInfo.pronouns,
                description: profileInfo.description
            },
        };
        db.collection("Professor").updateOne(filter, updateDoc);
        console.log("we succesfully updated a professor");
        return ;
    }
    catch (err) {
        console.log(err);
        console.log('could not connect to db for professor');
        return ;
    }
}


export async function saveNewUser(formData, isStudent) {
    try {
        const db = await connectToDatabase();
        
        // Determine the collection based on the user type
        const collectionName = isStudent ? 'Student' : 'Professor';
        
        // Create a new user object with the provided form data
        const newUser = {
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
            userType: isStudent ? 'student' : 'professor'
        };

        const result = await db.collection(collectionName).insertOne(newUser);
        
        console.log('User saved successfully:', result.insertedId);
        
        return result.insertedId;
    } catch (error) {
        console.error('Error saving new user:', error);
        throw error;
    }
}