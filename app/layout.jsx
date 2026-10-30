import Navbar from '../components/Navbar'
import Footer from '../components/home/Footer'
import SiteStructuredData from '../components/seo/SiteStructuredData'
import { SITE_URL } from '../lib/seo'
import './globals.css'

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: 'AirlinesGroup Travel | Group Flight Bookings',
    description: 'Find and book group flights with dedicated travel support from AirlinesGroup Travel.',
    openGraph: {
        type: 'website',
        siteName: 'AirlinesGroup Travel',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning className="min-h-screen bg-white font-sans antialiased">
                <SiteStructuredData />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
