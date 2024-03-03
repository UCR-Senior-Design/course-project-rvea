import ProfessorProfilePage from '../../components/professorProfilePage';
import { connectToDatabase } from '../../connectdb';

async function getProfessorInfo() {
    try {
        const db = await connectToDatabase();
        const professorInfo = await db.collection("Professor").find({}).toArray();
        professorInfo[0]["_id"] = professorInfo[0]["_id"].toString();

        return professorInfo[0];
    }
    catch {
        console.log('could not connect to db for professor');
    }
}

export default async function Profile() {
    const professorInfo = await getProfessorInfo();

    return (
        <ProfessorProfilePage profileInfo={professorInfo}/>
    )
}