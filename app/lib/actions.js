'use server'

import { signIn } from '../../auth';
import { AuthError } from 'next-auth';
import { connectToDatabase } from '../connectdb';
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
    try{
        //Store job posting by saving it to professor user [which is a better way to store it?: new colelction? existing prof user?]
        // const db = connectToDatabase();
        // const filter = { _id: new ObjectId(createJobInfo._id)};
        // const createDoc = {
        //     $set: {
        //         jobtitle: profileInfo.email,
        //         phone_number: profileInfo.phone_number,
        //         pronouns: profileInfo.pronouns,
        //         description: profileInfo.description,
        //         postedjobs: createJobInfo.
        //     },
        // };

        //save document to database
            //db.collection("Professor").updateOne(filter, updateDoc);
        console.log('successfully created a job')
        return;
    }
    catch (err) {
        console.log(err);
        console.log('could not create job posting');
        return;
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