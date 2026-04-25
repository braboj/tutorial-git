// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { remarkRewriteLinks } from './src/plugins/remark-rewrite-links.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://braboj.me',
  base: '/tutorial-git/',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkRewriteLinks],
  },
});
