import Navbar from '../components/Navbar.jsx'

//export const metadata = {
//    title: 'UCR TA Hiring Website'
//}

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