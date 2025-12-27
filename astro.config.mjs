import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://sakait-blog.web.app',

  // Next.jsのtrailingSlash設定を継承
  trailingSlash: 'always',

  // ビルド出力先（Firebase Hostingと互換性のため）
  outDir: './out',

  integrations: [
    mdx(),
    sitemap({
      // robots.txtのカスタマイズは不要（Astroがデフォルトで生成）
      filter: (page) => !page.includes('/404'),
    }),
  ],

  markdown: {
    // 既存のrehypeプラグインを活用
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
        },
      ],
    ],
    // シンタックスハイライト（オプション）
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
