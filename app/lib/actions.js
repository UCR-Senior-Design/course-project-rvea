'use server'

import { signIn } from '../../auth';
import { AuthError } from 'next-auth';
import { connectToDatabase, closeDatabase } from '../connectdb';
import { ObjectId } from 'mongodb';
import { signOut } from '../../auth';

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

export async function SignOut() {
    await signOut();
}

export async function saveProfessorInfo(mode, profileInfo) {
    if (mode == 0) return;
    try {
        const db = await connectToDatabase();
        const filter = { _id: new ObjectId(profileInfo._id) };
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
        return;
    }
    catch (err) {
        console.log(err);
        console.log('could not connect to db for professor');
        return;
    }
    finally {
        closeDatabase();
    }
}

export async function saveAppliedJobs(job_id, user_email) {
    try {
        const db = await connectToDatabase();
        const filter = { Email: user_email };
        const updateDoc = {
            $push: {
                "Experience": new ObjectId(job_id)
            },
        };
        db.collection("Student").updateOne(filter, updateDoc);
        console.log("we succesfully applied for a position");
        return;
    }
    catch (err) {
        console.log(err);
        console.log('could not connect to db for student application job');
        return;
    }
    finally {
        closeDatabase();
    }
}


// Save Job Posting to Professor's Acct
export async function createJobPosting(createJobInfo) {
    
    let db;
    try{
        // Connect to the database and access its Previous Jobs collection
        db = await connectToDatabase();
        const collection = db.collection("Previous Jobs");
    
        // Create a document to insert
        const doc = {
            Title: createJobInfo.jobTitle,
            Description: createJobInfo.description,
            Professor: createJobInfo.professor,
            Term: createJobInfo.schoolTerm,
            Contract: "",
            Deadline: createJobInfo.deadline,
            Wage: createJobInfo.hourlyWage,
            MinHrs: createJobInfo.minHrs,
            TotalPos: createJobInfo.totalPos,
            Prereqs: createJobInfo.prereqs
        }

        // Insert the defined document into the Previous Jobs collection
        const result = await collection.insertOne(doc);
        // Print the ID of the inserted document
        // console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } catch (err) {
                console.log(err);
                console.log('could not create job posting');
                return;
    } finally {
        // Close the MongoDB client connection
        closeDatabase(db);
    }

}


export async function saveNewStudent(formData) {
    try {
        const db = await connectToDatabase();

        // Determine the collection based on the user type

        // Create a new user object with the provided form data
        const newUser = {
            Username: formData.fullName,
            Email: formData.email,
            password: formData.password,
        };

        const result = await db.collection(collectionName).insertOne(newUser);

        console.log('User saved successfully:', result.insertedId);

        return result.insertedId;
    } catch (error) {
        console.error('Error saving new user:', error);
        throw error;
    }
}


export async function saveNewProfessor(formData) {
    try {
        const db = await connectToDatabase();
        
        // Determine the collection based on the user type
        const collectionName = 'Professor';
        
        // Create a new user object with the provided form data
        const newUser = {
            Username: formData.fullName,
            Email: formData.email,
            password: formData.password,
            Experience: []
        };

        const result = await db.collection(collectionName).insertOne(newUser);

        console.log('User saved successfully:', result.insertedId);

        return result.insertedId;
    } catch (error) {
        console.error('Error saving new user:', error);
        throw error;
    }
    finally {
        closeDatabase();
    }
}