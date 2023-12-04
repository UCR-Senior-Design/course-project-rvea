//import Popup from "../../components/popup.jsx";
import AppliedJobs from "../../components/AppliedJobs";
import { promises as fs } from "fs";

async function getAppliedJobsMockData() {
    const file = await fs.readFile(process.cwd() + "/json/appliedJobsMockData.json", "utf-8");
    const data = JSON.parse(file);

    return data.appliedJobs;
}

export default async function Page() {
    const appliedJobs = await getAppliedJobsMockData();

    return (
       <AppliedJobs appliedJobs={appliedJobs}></AppliedJobs>
    );
}