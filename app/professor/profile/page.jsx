import ProfessorProfilePage from '../../components/professorProfilePage';
import { getProfessorInfo } from '../../lib/actions';
import { auth } from '../../../auth';

export default async function Profile() {
    const session = await auth();
    const professorInfo = await getProfessorInfo(session.user.email);

    return (
        <ProfessorProfilePage profileInfo={professorInfo} />
    )
}