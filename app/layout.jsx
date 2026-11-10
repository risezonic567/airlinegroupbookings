import Navbar from '../components/Navbar'
import Footer from '../components/home/Footer'
import SiteStructuredData from '../components/seo/SiteStructuredData'
import { SITE_URL } from '../lib/seo'
import './globals.css'

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: 'Airline Group Bookings | Group Flight Bookings',
    description: 'Find and book group flights with dedicated travel support from Airline Group Bookings.',
    openGraph: {
        type: 'website',
        siteName: 'Airline Group Bookings',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
            </head>
            <body suppressHydrationWarning className="min-h-screen bg-white font-sans antialiased">
                <SiteStructuredData />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
