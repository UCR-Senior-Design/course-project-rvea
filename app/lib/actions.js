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
}

// export async function saveAppliedJobs() {
//     try {
//         const db = await connectToDatabase();
//         console.log("student successfully applied to a job");
//         return;

//         //professor creates posting/job object, we save student id's in attribute of that job posting [into job collection]
//         //also save into Student Applied Jobs collection [to show on student view]
//                     //student id
//             //job_ids[]
//     }
//     catch (err) {
//         console.log(err);
//         console.log('could not connect to db for student applications');
//         return;
//     }
// }


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


export async function saveNewUser(formData, isStudent) {
    try {
        const db = await connectToDatabase();
        
        // Determine the collection based on the user type
        const collectionName = isStudent ? 'Professor' : 'Student';
        
        // Create a new user object with the provided form data
        const newUser = {
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
            isStudent: isStudent ? false : true
        };

        const result = await db.collection(collectionName).insertOne(newUser);
        
        console.log('User saved successfully:', result.insertedId);
        
        return result.insertedId;
    } catch (error) {
        console.error('Error saving new user:', error);
        throw error;
    }
}