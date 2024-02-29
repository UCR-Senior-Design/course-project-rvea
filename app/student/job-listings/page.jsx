import Searchbar from '../../components/Searchbar.jsx'
import Listings from '../../components/Listings.jsx'
import { promises as fs } from "fs";

import { connectToDatabase } from '../../connectdb.jsx';

// async function getJobListingsMockData() {
//     const file = await fs.readFile(process.cwd() + "/json/jobListingsMockData.json", "utf-8");
//     const data = JSON.parse(file);
//     return data.jobListings;
// }

//Connect to db and fetch data
async function getJobListings() {
    try {
        const db = await connectToDatabase();
        const jobListings = await db.collection("Previous Jobs").find({}).toArray();
        //console.log("Job Data: ", jobListings);
        return jobListings;
    }
    catch {
        console.log('could not connect to db for job listings')
    }
}

export default async function JobListings() {
    //const jobListings = await getJobListingsMockData();  //fetch data
    const jobListings = await getJobListings();
    for (let job in jobListings) {
        jobListings[job]._id = 0
    }
    return(
        <>
            <Searchbar />
            <Listings jobListings={jobListings}/>
        </>
    )
}