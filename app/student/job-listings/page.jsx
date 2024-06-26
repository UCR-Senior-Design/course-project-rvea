import Searchbar from '../../components/Searchbar.jsx'
import Listings from '../../components/Listings.jsx'
import { promises as fs } from "fs";

import { connectToDatabase, closeDatabase } from '../../connectdb.jsx';
import { connect } from 'http2';

// async function getJobListingsMockData() {
//     const file = await fs.readFile(process.cwd() + "/json/jobListingsMockData.json", "utf-8");
//     const data = JSON.parse(file);
//     return data.jobListings;
// }

//Connect to database
async function getDB() {
    try {
        const db = await connectToDatabase();
        return db;
    }
    catch {
        console.log('could not connect to database');
    }
    finally {
        closeDatabase();
    }
}

//Fetch data from database
async function getJobListings() {
    try {
        const db = await getDB();
        const jobListings = await db.collection("Previous Jobs").find({}).toArray();      
        return jobListings;
    }
    catch {
        console.log('could not connect to db for job listings');
    }
}


export default async function JobListings() {
    const jobListings = await getJobListings();
    const searchjobs = []
    for (let job in jobListings) {
        jobListings[job]._id = jobListings[job]._id.toString();
    }


    return(
        <>
            {/* Searchbar component also includes Listings Component*/}
            <Searchbar jobListings={jobListings}/>
            {/* <Listings jobListings={jobListings}/> */}
        </>
    )
}

//searchbar is gonna pass in searched results to jobListings?
//else, just display default