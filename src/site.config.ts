import type { SiteConfig } from '@/types/content'

export const siteConfig: SiteConfig = {
  productBanner: {
    enabled: false,
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
      visible: false,
    },
  ],
  whyUs: [
    {
      num: '01',
      title: 'Results, not reports',
      desc: "Every milestone is tied to an outcome your business can measure, not hours billed or tasks completed. If it doesn't move your operations forward, it doesn't ship.",
    },
    {
      num: '02',
      title: 'No surprises, ever',
      desc: 'We send clear updates, surface blockers early, and never leave you guessing at handover. You know exactly where your project stands at every point.',
    },
    {
      num: '03',
      title: 'We work the way you work',
      desc: "We embed into your workflow, not the other way around. Fixed-scope project, embedded team, or ongoing managed support. We adapt to your structure.",
    },
    {
      num: '04',
      title: 'Built to last, not just to ship',
      desc: "We write clean, documented, extensible code. No dependency on us. You own the system fully and your next developer will thank you for it.",
    },
  ],
}
