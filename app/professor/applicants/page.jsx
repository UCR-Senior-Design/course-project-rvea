import ProfessorApplicants from '../../components/ProfessorApplicants';
import { auth } from '../../../auth';
import { getApplicants } from '../../lib/actions';

export default async function Applicants() {
    const session = await auth();
    const applicants = await getApplicants(session.user.email);

    return <ProfessorApplicants applicants={applicants}/>
}

/*
 transcript & buttons opens/closes label (put it outside label w position absolute?)
 fixing spacing
*/