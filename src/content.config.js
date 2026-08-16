import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(), // Made optional
    category: z.enum([
      'No-damage',
      'Small-Space',
      'Student-budget'
    ]),
    publishDate: z.union([z.string(), z.date()]).optional(), // Made optional
  }),
});

export const collections = {
  'blog-posts': blogCollection,
};