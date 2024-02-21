import Recommended from '../../components/Recommended.jsx'
import { connectToDatabase } from '../../connectdb.jsx'

async function getRecJobs() {
    const db = await connectToDatabase();
    const recjobs = await db.collection("Previous Jobs").find({}).toArray();
    return recjobs;
}


export default async function RecJobs() {
    const rec = await getRecJobs();
    return(
        <>
            <Recommended recjobs={rec}/>
        </>
    )
}