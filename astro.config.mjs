import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yrlan.github.io',
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
