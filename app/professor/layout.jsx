import Navbar from '../components/Navbar.jsx'

export default function ProfessorLayout({ children }) {
    const routes = [
        { name: 'Create Job', link: '/professor/create-job'},
        { name: 'Applicants', link: '/professor/applicants' },
        { name: 'Profile', link: '/professor/profile'}
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