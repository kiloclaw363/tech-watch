import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string(),
    source: z.string(),
    link: z.string().url(),
  }),
});

export const collections = {
  blog: blogCollection,
};
