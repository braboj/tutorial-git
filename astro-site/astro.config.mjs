// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://braboj.github.io',
  base: '/tutorial-git/',
  trailingSlash: 'always',
  markdown: {
    syntaxHighlight: false,
  },
});
