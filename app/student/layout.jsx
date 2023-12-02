import Navbar from '../components/Navbar.jsx'

export default function StudentLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}