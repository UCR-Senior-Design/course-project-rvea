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
        

        const newUser = {
            Username: formData.fullName,
            Email: formData.email,
            password: formData.password,
        };

        const result = await db.collection('Student').insertOne(newUser);

        console.log('User saved successfully:', result.insertedId);

        return result.insertedId;
    } catch (error) {
        console.error('Error saving new user:', error);
        throw error;
    }
}

export async function editProfile(input_username, degreeLevel, gpa, pronouns, skills, courses, transcript_pdfBase64, resume_pdfBased64) {
    let db;
    try{
        db = await connectToDatabase();

        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const year = today.getFullYear();
        const formattedDate = `${month}-${day}-${year}`;

        const result = await db.collection("Student").updateOne(
            { 
                $or: [
                    { Username: input_username },
                    { fullName: input_username }
                ]
            },
            { $set: { 
                PhoneNumber: "555",
                DegreeLevel: degreeLevel,
                GPA: gpa,
                Pronouns: pronouns,
                Skills: skills,
                Courses: courses,
                Transcript: transcript_pdfBase64,
                Resume: resume_pdfBased64,
                ApplicationDate: formattedDate
            } }
        );
    } catch (err) {
        console.log(err);
        console.log('could not edit profile page');
        return;
    } finally {
        //closeDatabase(db);
        if (db && db.close) {
            await db.close();
        }
    }

}


export async function saveNewProfessor(formData) {
    try {
        const db = await connectToDatabase();
        
        const newUser = {
            Username: formData.fullName,
            Email: formData.email,
            password: formData.password,
            Experience: []
        };

        const result = await db.collection('Professor').insertOne(newUser);

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
