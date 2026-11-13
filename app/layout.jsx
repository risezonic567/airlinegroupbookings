import Navbar from '../components/Navbar'
import Footer from '../components/home/Footer'
import SiteStructuredData from '../components/seo/SiteStructuredData'
import { OG_IMAGE, SITE_URL } from '../lib/seo'
import './globals.css'

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: 'Airline Group Bookings | Group Flight Bookings',
    description: 'Find and book group flights with dedicated travel support from Airline Group Bookings.',
    icons: {
        icon: [
            { url: '/favicons/favicon.ico', sizes: 'any' },
            { url: '/favicons/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        ],
        apple: [{ url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    },
    manifest: '/favicons/site.webmanifest',
    openGraph: {
        type: 'website',
        siteName: 'Airline Group Bookings',
        locale: 'en_US',
        images: [OG_IMAGE],
    },
    twitter: {
        card: 'summary_large_image',
        images: [OG_IMAGE.url],
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
