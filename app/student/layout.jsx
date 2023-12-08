import Navbar from '../components/Navbar.jsx'

export default function StudentLayout({ children }) {
    const routes = [
        { name: 'Job Listings', link: '/student/job-listings'},
        { name: 'Recommended Jobs', link: '/student/rec-jobs' },
        { name: 'Applied Jobs', link: '/student/applied-jobs'},
        { name: 'Profile', link: '/student/profile'}
    ];

    return (
        <html lang="en">
            <body>
                <Navbar routes={routes}/>
                {children}
            </body>
        </html>
    )
}