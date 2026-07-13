import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://curiocat-studio.vercel.app',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
});