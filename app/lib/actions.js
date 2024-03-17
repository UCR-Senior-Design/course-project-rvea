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

export async function getProfessorInfo(email) {
    try {
        const db = await connectToDatabase();
        const professorInfo = await db.collection("Professor").find({ "Email": email }).toArray();
        const jobs = await db.collection("Previous Jobs").find({}).toArray();
        professorInfo[0]["_id"] = professorInfo[0]["_id"].toString();
        for (let jobId in professorInfo[0]["Jobs"]) {
            for (let job of jobs) {
                if (job._id.toString() == professorInfo[0]["Jobs"][jobId].toString()) {
                    professorInfo[0]["Jobs"][jobId] = job.Title;
                }
            }
        }

        return professorInfo[0];
    }
    catch {
        console.log('could not connect to db for professor');
    }
}

export async function getStudentInfo(email) {
    try {
        const db = await connectToDatabase();
        const studentInfo = await db.collection("Student").find({ "Email": email }).toArray();
        studentInfo[0]["_id"] = studentInfo[0]["_id"].toString();

        return studentInfo[0];
    }
    catch {
        console.log('could not connect to db for professor');
    }
}

export async function saveAppliedJobs(job_id, user_email) {
    try {
        const db = await connectToDatabase();
        const student = await db.collection("Student").findOne({Email : user_email});
        const filter = { Email: user_email };
        const updateDoc = {
            $push: {
                "Experience": new ObjectId(job_id)
            },
        };
        db.collection("Student").updateOne(filter, updateDoc);
        db.collection("Previous Jobs").updateOne({_id : new ObjectId(job_id)}, {$push : {"Applicants" : student._id}});
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
    try {
        // Connect to the database and access its Previous Jobs collection
        db = await connectToDatabase();
        const collection = db.collection("Previous Jobs");
        const professor = await db.collection("Professor").findOne({Username : createJobInfo.professor});

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
            Prereqs: createJobInfo.prereqs,
            Applicants: []
        }

        // Insert the defined document into the Previous Jobs collection
        const result = await collection.insertOne(doc);
        db.collection("Professor").updateOne({_id : professor._id}, {$push : {"Jobs" : result.insertedId}});
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

export async function getApplicants(email) {
    try {
        const db = await connectToDatabase();
        const professorInfo = await db.collection("Professor").find({ "Email": email }).toArray();
        const jobs = await db.collection("Previous Jobs").find({}).toArray();
        let res = {};

        for (let jobId in professorInfo[0]["Jobs"]) {
            for (let job of jobs) {
                if (job._id.toString() == professorInfo[0]["Jobs"][jobId].toString()) {
                    res[job.Title] = job.Applicants;
                }
            }
        }

        let finalres = {}

        for (let job in res) {
            finalres[job] = [];
            for (let userid of res[job]) {
                let stu = await db.collection("Student").findOne({ _id: userid });
                const accepted = await db.collection("Job").findOne({student: new Object(stu._id)});
                console.log(accepted);
                finalres[job].push({accepted: !!accepted, id: stu._id, username: stu.Username, degreelvl: stu.DegreeLevel, gpa: stu.GPA, applicationDate: stu.ApplicationDate, pronouns: stu.Pronouns, skills: stu.Skills, courses: stu.Courses, transcript: stu.Transcript, resume: stu.Resume });
            }
        }

        finalres = JSON.stringify(finalres);

        return finalres;
    }
    catch {
        console.log("Failed in get applicants");
    }
}

export async function acceptStudent(course, student) {
    try {
        console.log("inside here");
        console.log(course);
        const db = await connectToDatabase();
        const job = await db.collection("Previous Jobs").findOne({ Title: course });

        // Create a new user object with the provided form data
        const acceptedStudent = {
            student: new ObjectId(student),
            course: job._id
        };
        console.log(acceptedStudent);
        const result = await db.collection("Job").insertOne(acceptedStudent);

        console.log('successfully saved student', result.insertedId);
    } catch (error) {
        console.error('Error accepting student', error);
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
