/**
 * Central site configuration — update this file to change contact info,
 * address, social links, and brand copy across the entire site.
 */
export const siteInfo = {
  name: 'Tritium Global',
  tagline: 'Enterprise Software · Data Engineering · Cloud & DevOps',
  description:
    'Tritium Global partners with enterprises and growing businesses to build reliable software systems, data infrastructure, and cloud environments that operations depend on.',
  url: 'https://tritiumglbl.com',

  contact: {
    email: 'support@tritiumglbl.com',
    phone: '+880 1521-259370',
  },

  address: {
    line1: '16/1, Demra',
    line2: 'Dhaka - 1203',
    country: 'Bangladesh',
    mapUrl: 'https://maps.app.goo.gl/v46b5pB69Fo1FFys8',
  },

  social: {
    linkedin: 'https://www.linkedin.com/company/tritium-global',
    github: 'https://github.com/tritiumglbl',
  },

  brand: {
    primary: '#0F6E56',
    dark: '#085041',
    light: '#E1F5EE',
    accent: '#9FE1CB',
  },

  foundedYear: 2023,
} as const
