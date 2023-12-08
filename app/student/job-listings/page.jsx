import Searchbar from '../../components/Searchbar.jsx'
import Listings from '../../components/Listings.jsx'
import { promises as fs } from "fs";

async function getJobListingsMockData() {
    const file = await fs.readFile(process.cwd() + "/json/jobListingsMockData.json", "utf-8");
    const data = JSON.parse(file);
    return data.jobListings;
}


export default async function JobListings() {
    const jobListings = await getJobListingsMockData(); 
    return(
        <>
            <Searchbar />
            <Listings jobListings={jobListings}/>
        </>
    )
}