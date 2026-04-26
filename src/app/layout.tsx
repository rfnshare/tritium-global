import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ProductBanner } from '@/components/layout/ProductBanner'
import { siteConfig } from '@/lib/config'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Tritium Global — Enterprise Software, Data Engineering & Cloud',
    template: '%s | Tritium Global',
  },
  description:
    'Tritium Global delivers end-to-end software solutions, data engineering pipelines, and cloud & DevOps support for businesses that need practical results — not promises.',
  keywords: ['software development', 'data engineering', 'cloud devops', 'Bangladesh', 'IT consulting'],
  authors: [{ name: 'Tritium Global', url: 'https://tritiumglbl.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tritiumglbl.com',
    siteName: 'Tritium Global',
    title: 'Tritium Global — Enterprise Software, Data Engineering & Cloud',
    description: 'We turn messy data into systems that work.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tritium Global',
    description: 'We turn messy data into systems that work.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {siteConfig.productBanner.enabled && (
          <ProductBanner config={siteConfig.productBanner} />
        )}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
