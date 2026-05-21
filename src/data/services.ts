export type Service = {
  title: string;
  href: string;
  description: string;
};

export const services: Service[] = [
  {
    title: 'Custom WordPress Plugin Development',
    href: '/services/custom-wordpress-plugin-development/',
    description: 'Purpose-built functionality beyond off-the-shelf plugins.',
  },
  {
    title: 'WordPress API Integrations',
    href: '/services/wordpress-api-integrations/',
    description: 'Sync data cleanly between WordPress and external systems.',
  },
  {
    title: 'WooCommerce Customization',
    href: '/services/woocommerce-customization/',
    description: 'Checkout flows, subscription logic, and ecommerce edge cases.',
  },
  {
    title: 'Commerce7 + WordPress Integration',
    href: '/services/commerce7-wordpress-integration/',
    description: 'Advanced storefront work for wineries and DTC brands.',
  },
  {
    title: 'Debugging, Refactoring & Rescue Work',
    href: '/services/debugging-refactoring-rescue-work/',
    description: 'Stabilize fragile builds and clean up inherited codebases.',
  },
];
