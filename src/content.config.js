import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string(),
    // Enforces strict selection from your 3 categories
    category: z.enum([
      'No-damage',
      'Small-Space',
      'Student-budget'
    ]),
  }),
});

export const collections = {
  'blog-posts': blogCollection, // or 'posts', matching your collection folder name
};