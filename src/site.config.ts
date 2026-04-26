import type { SiteConfig } from '@/types/content'

export const siteConfig: SiteConfig = {
  productBanner: {
    enabled: true,
    productId: 'eshoopi',
    headline: '🚀 Introducing eShoopi — now in early access',
    subtext: 'B2B customer intelligence built for Bangladeshi retailers. Know your buyers, grow your sales.',
    ctaLabel: 'Get early access →',
    ctaUrl: '/products/eshoopi',
    style: 'banner',
  },
  products: [
    {
      id: 'eshoopi',
      name: 'eShoopi',
      tagline: 'Customer intelligence for B2B retail in Bangladesh',
      description:
        'eShoopi turns your raw sales data into actionable customer profiles — revealing who your best buyers are, what they buy, when they churn, and how to win them back. Built specifically for the Bangladesh B2B retail market.',
      url: 'https://eshoopi.com',
      status: 'early-access',
      visible: true,
    },
  ],
}
