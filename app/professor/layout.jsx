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

//Fix Navbar to pass in prop routes?