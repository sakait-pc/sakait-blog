import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    // 将来的に追加可能なフィールド
    // description: z.string().optional(),
    // tags: z.array(z.string()).optional(),
    // draft: z.boolean().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
};
