import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
    category: z.enum(['No-damage', 'Small-Space', 'Student-budget']),
    publishDate: z.coerce.date().optional(),
  }),
});

export const collections = {
  'blog-posts': blogCollection,
};