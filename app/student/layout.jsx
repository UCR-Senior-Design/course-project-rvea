import Navbar from '../components/Navbar.jsx';
import { auth } from '../../auth';
import SessionProvider from '../components/SessionProvider.jsx';

export default async function StudentLayout({ children }) {
    const routes = [
        { name: 'Job Listings', link: '/student/job-listings' },
        { name: 'Recommended Jobs', link: '/student/rec-jobs' },
        { name: 'Applied Jobs', link: '/student/applied-jobs' },
        { name: 'Profile', link: '/student/profile' }
    ];
    const session = await auth();

    return (
        <html lang="en">
            <body>
                <SessionProvider session={session}>
                    <Navbar routes={routes} />
                    {children}
                </SessionProvider>
            </body>
        </html>
    )
}