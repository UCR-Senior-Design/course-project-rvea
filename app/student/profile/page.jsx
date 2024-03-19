import ProfilePage from '../../components/ProfilePage.jsx'
import { getStudentInfo } from '../../lib/actions';
import { auth } from '../../../auth';

export default async function Profile() {
    const session = await auth();
    const studentInfo = await getStudentInfo(session.user.email);

    return(
        <ProfilePage profileInfo={studentInfo} />
    )
}