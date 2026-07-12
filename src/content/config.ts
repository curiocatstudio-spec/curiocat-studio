import { defineCollection, z } from 'astro:content';

const games = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    genre: z.string(),
    status: z.enum(['released', 'in-development', 'concept']),
    platform: z.string(),
    engine: z.string(),
    cover: z.string(),

    trailer: z.object({
  youtube: z.string(),
  poster: z.string(),
}).optional(),

    // Tambahkan ini
    itchUrl: z.string().url().optional(),

    gallery: z.array(z.string()).default([]),
    order: z.number().default(99),
    accent: z.enum(['gold', 'crimson']).default('gold'),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    author: z.string().default('CurioCat Studio'),
    tag: z.string().default('Dev Log'),
    cover: z.string().optional(),
  }),
});

export const collections = { games, blog };
