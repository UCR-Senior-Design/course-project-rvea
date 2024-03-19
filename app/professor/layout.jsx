import Navbar from '../components/Navbar.jsx'
import { auth } from '../../auth';
import SessionProvider from '../components/SessionProvider.jsx';

export default async function ProfessorLayout({ children }) {
    const routes = [
        { name: 'Create Job', link: '/professor/create-job'},
        { name: 'Applicants', link: '/professor/applicants' },
        { name: 'Profile', link: '/professor/profile'}
    ];
    const session = await auth();

    return (
        <html lang="en">
            <body>
                <SessionProvider session={session}>
                    <Navbar routes={routes}/>
                    {children}
                </SessionProvider>
            </body>
        </html>
    )
}