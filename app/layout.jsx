import Navbar from '../components/Navbar'
import Footer from '../components/home/Footer'
import './globals.css'

export const metadata = {
    title: 'AirlinesGroup Travel | Group Flight Bookings',
    description: 'Find and book group flights with dedicated travel support from AirlinesGroup Travel.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning className="min-h-screen bg-white font-sans antialiased">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
