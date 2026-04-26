import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ProductBanner } from '@/components/layout/ProductBanner'
import { siteConfig } from '@/lib/config'
import { siteInfo } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Tritium Global — We Build What Your Business Runs On',
    template: '%s | Tritium Global',
  },
  description: siteInfo.description,
  keywords: ['software development', 'data engineering', 'cloud devops', 'Bangladesh', 'IT consulting', 'enterprise software'],
  authors: [{ name: 'Tritium Global', url: siteInfo.url }],
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
    title: 'Tritium Global',
    description: siteInfo.description,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
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
