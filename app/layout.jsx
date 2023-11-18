import './global.css'
import Image from 'next/image'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Image src="/ucr_logo.png" width="210" height="64"></Image>
            <body>{children}</body>
        </html>
    )
}