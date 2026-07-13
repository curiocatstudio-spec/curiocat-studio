import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://curiocat-studio.vercel.app',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});