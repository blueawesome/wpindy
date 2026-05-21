export type WorkItem = {
  slug: string;
  title: string;
  shortTitle?: string;
  client?: string;
  clientVisibility?: string;
  context?: string;
  role?: string;
  summary: string;
  image?: string;
  featured?: boolean;
  workTypes?: string[];
  stack?: string[];
  services?: { label: string; href: string }[];
  snapshot?: { label: string; value: string }[];
  problem?: string;
  built?: string[];
  impact?: string[];
  technicalNotes?: string[];
};

export const work: WorkItem[] = [
  {
    slug: 'st-julian-commerce7-wordpress-build',
    title: 'St. Julian Commerce7 + WordPress Build',
    client: 'St. Julian Winery',
    clientVisibility: 'Named Client',
    summary:
      'A custom WordPress rebuild and Commerce7 integration that connected product data, club functionality, event tickets, and storefront content into a more flexible ecommerce experience.',
    workTypes: ['Site Builds', 'Custom Plugins', 'API Integrations', 'Commerce7'],
    stack: ['WordPress', 'Commerce7', 'ACF', 'PHP', 'JavaScript'],
    services: [
      { label: 'Commerce7 + WordPress Integration', href: '/services/commerce7-wordpress-integration/' },
    ],
    image: '/work/placeholder-st-julian.svg',
  },
  {
    slug: 'ai-search-plugin-admin-reporting',
    title: 'AI Search Plugin with Admin Reporting',
    clientVisibility: 'Client Withheld',
    summary:
      "Custom plugin integrating a client's AI search and adding admin reporting, exports, and internal visibility tools.",
  workTypes: ['Custom Plugins', 'API Integrations', 'Internal Tools'],
    stack: ['WordPress', 'PHP', 'JavaScript', 'ACF', 'REST APIs'],
    services: [
      { label: 'Custom WordPress Plugin Development', href: '/services/custom-wordpress-plugin-development/' },
    ],
    image: '/work/placeholder-ai-search.svg',
  },
  {
    slug: 'custom-woocommerce-checkout-flow',
    title: 'Custom WooCommerce Checkout Flow',
    clientVisibility: 'Client Withheld',
    summary:
      'A custom WooCommerce checkout flow that guides users through service selection, add-ons, and payment options before completing a business-specific purchase path.',
    workTypes: ['WooCommerce', 'Checkout Flows'],
    stack: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript'],
    services: [
      { label: 'WooCommerce Customization', href: '/services/woocommerce-customization/' },
    ],
    image: '/work/placeholder-woocommerce.svg',
  },
  {
    slug: 'woocommerce-loop-course-extension',
    title: 'WooCommerce Loop Course Extension',
    client: 'Maestro + Loop',
    clientVisibility: 'Agency Partner',
    summary:
      'A custom WooCommerce extension that imports and sells Loop courses through WooCommerce while syncing users and course-related data.',
    workTypes: ['Custom Plugins', 'API Integrations', 'WooCommerce'],
    stack: ['WordPress', 'WooCommerce', 'Loop', 'PHP', 'JavaScript'],
    services: [
      { label: 'Custom WordPress Plugin Development', href: '/services/custom-wordpress-plugin-development/' },
    ],
    image: '/work/placeholder-loop.svg',
  },
  {
    slug: 'finish-line-gutenberg-build',
    title: 'Finish Line Gutenberg Build',
    client: 'Finish Line',
    clientVisibility: 'Named Client / Legacy Project',
    summary:
      'A WordPress/Gutenberg build focused on giving editors a more flexible publishing experience for a large retail content platform.',
    workTypes: ['Site Builds', 'Gutenberg', 'Theme Builds'],
    stack: ['WordPress', 'Gutenberg', 'PHP', 'JavaScript'],
    services: [
      { label: 'Services Overview', href: '/services/' },
    ],
    image: '/work/placeholder-finish-line.svg',
  },
  {
    slug: 'vetbloom-wordpress-woocommerce-loop-build',
    title: 'VetBloom WordPress + WooCommerce Loop Build',
    client: 'VetBloom',
    clientVisibility: 'Named Client / Agency Partner',
    summary:
      'Custom WordPress site build including theme development and integration of a custom WooCommerce + Loop course plugin.',
    workTypes: ['Site Builds', 'WooCommerce', 'Custom Plugins'],
    stack: ['WordPress', 'WooCommerce', 'Loop', 'PHP', 'JavaScript'],
    image: '/work/placeholder-vetbloom.svg',
  },
  {
    slug: 'service-business-custom-checkout-flow',
    title: 'Service Business Custom Checkout Flow',
    clientVisibility: 'Client Withheld',
    summary:
      'Custom checkout flow with ZIP lookup, service availability logic, add-ons, payment plans, and API integrations to create customers, invoices, and schedules.',
    workTypes: ['Checkout Flows', 'API Integrations', 'WooCommerce'],
    stack: ['WordPress', 'PHP', 'JavaScript', 'REST APIs'],
    image: '/work/placeholder-service-business.svg',
  },
];
