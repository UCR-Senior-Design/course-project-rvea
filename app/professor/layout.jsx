import Navbar from '../components/Navbar.jsx'

export default function ProfessorLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}

//Fix Navbar to pass in prop routes in layout page for student and professor?
/*
1) pass in a props list (in that list is the route_name(1) and the route_link(2))
2) create list items individually in a loop
*/