import { auth } from '../../../auth';
import AppliedJobs from "../../components/AppliedJobs";
import { connectToDatabase, closeDatabase } from '../../connectdb';

async function getUserAppliedJobs(email) {
   try {
        const db = await connectToDatabase();
        let jobs = await db.collection("Previous Jobs").find({}).toArray();
        let user = await db.collection("Student").find({ "Email": email }).toArray();
        user = (user.length ? user[0] : 0);
        const res = [];

        for (let jobId of user.Experience) {
            for (let job of jobs)  {
                if (job._id.toString() == jobId.toString()) {
                    job._id = job._id.toString();
                    res.push(job);
                }
            }
        }
        
        return res;
    }
    catch (err) {
        console.log(err)
        console.log("could not get users jobs");
    }
    finally {
        closeDatabase();
    }
};

export default async function Page() {
    const session = await auth(); 
    const appliedJobs = await getUserAppliedJobs(session.user.email);

    return (
        <AppliedJobs appliedJobs={appliedJobs}></AppliedJobs>
    );
}