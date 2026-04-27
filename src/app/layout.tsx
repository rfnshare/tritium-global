import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ProductBanner } from '@/components/layout/ProductBanner'
import { JsonLd } from '@/components/seo/JsonLd'
import { siteConfig } from '@/lib/config'
import { siteInfo } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteInfo.url),
  title: {
    default: 'Tritium Global — We Build What Your Business Runs On',
    template: '%s | Tritium Global',
  },
  description: siteInfo.description,
  keywords: [
    'software development Bangladesh',
    'enterprise software Dhaka',
    'data engineering Bangladesh',
    'cloud devops Bangladesh',
    'IT consulting Bangladesh',
    'dedicated development team',
    'custom software development',
    'B2B software Bangladesh',
  ],
  authors: [{ name: 'Tritium Global', url: siteInfo.url }],
  alternates: { canonical: siteInfo.url },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteInfo.url,
    siteName: siteInfo.name,
    title: 'Tritium Global — We Build What Your Business Runs On',
    description: siteInfo.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tritium Global — We Build What Your Business Runs On',
    description: siteInfo.description,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: siteInfo.name,
          url: siteInfo.url,
          description: siteInfo.description,
          email: siteInfo.contact.email,
          telephone: siteInfo.contact.phone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteInfo.address.line1,
            addressLocality: 'Dhaka',
            postalCode: '1203',
            addressCountry: 'BD',
          },
          sameAs: [siteInfo.social.linkedin, siteInfo.social.github],
        }} />
        <ThemeProvider>
          {siteConfig.productBanner.enabled && (
            <ProductBanner config={siteConfig.productBanner} />
          )}
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
