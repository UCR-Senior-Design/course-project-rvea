import './global.css'

export const metadata = {
    title: 'TA Hiring Website',
    icons: {
        icon: '/ucr_icon.jpg'
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}