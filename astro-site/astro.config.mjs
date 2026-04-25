// @ts-check
import { defineConfig } from 'astro/config';
import { remarkRewriteLinks } from './src/plugins/remark-rewrite-links.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://braboj.github.io',
  base: '/tutorial-git/',
  trailingSlash: 'always',
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkRewriteLinks],
  },
});
