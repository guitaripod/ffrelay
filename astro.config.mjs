import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://guitaripod.github.io',
  base: '/ffrelay',
  output: 'static',
  build: {
    format: 'directory'
  },
  integrations: [react()]
});