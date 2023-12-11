import './global.css'

export const metadata = {
    title: 'UCR TA Hiring Website'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}