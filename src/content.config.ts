import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    readMinutes: z.number(),
    summary: z.string(),
    quiz: z.object({
      question: z.string(),
      options: z.array(z.string()).min(2),
      answer: z.number(),
    }).optional(),
  }),
});

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    authorAge: z.number().optional(),
    type: z.enum(['profile', 'report', 'explainer', 'quiz']),
    date: z.coerce.date(),
    state: z.string().optional(),
    summary: z.string(),
    consent: z.boolean().default(false),
    sample: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const teams = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/teams' }),
  schema: z.object({
    name: z.string(),
    city: z.string(),
    state: z.string(),
    ageGroups: z.array(z.enum(['U13', 'U16', 'U19'])),
    level: z.enum(['beginner', 'competitive']),
    girls: z.boolean().default(false),
    url: z.string().url().optional(),
    verified: z.boolean().default(false),
    sample: z.boolean().default(false),
  }),
});

export const collections = { lessons, stories, teams };
