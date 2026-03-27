import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kiloclaw363.github.io',
  base: '/tech-watch/',
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
