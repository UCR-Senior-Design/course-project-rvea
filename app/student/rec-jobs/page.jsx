import Recommended from '../../components/Recommended.jsx'
import { connectToDatabase, closeDatabase } from '../../connectdb.jsx'

async function getRecJobs() {
    try {
        const db = await connectToDatabase();
        const recjobs = await db.collection("Previous Jobs").find({}).toArray();
        return recjobs;  
    } catch(err) {
        console.log(err);
        console.log("could not get recommended jobs");
    }
    finally {
        closeDatabase();
    }
}


export default async function RecJobs() {
    const rec = await getRecJobs();
    return(
        <>
            <Recommended recjobs={rec}/>
        </>
    )
}