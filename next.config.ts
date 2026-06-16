import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const config: NextConfig = {
  images: { unoptimized: true },
};

export default withNextIntl(config);
