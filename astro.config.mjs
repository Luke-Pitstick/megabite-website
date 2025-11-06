import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://megabiteco.com',
  trailingSlash: 'never', // Ensures consistent URLs without trailing slashes
  build: {
    format: 'file' // Generates clean URLs
  }
});
