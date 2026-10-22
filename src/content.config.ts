import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    cover: z.string().optional(),
    excerpt: z.string(),
    tags: z.array(z.string()).default(['tech'])
  })
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/projects' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    cover: z.string(),
    description: z.string(),
    tech: z.array(z.string()).default([]),
    url: z.string().optional(),
    repo: z.string().optional()
  })
});

const timeline = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/timeline' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    type: z.enum(['work', 'education', 'project', 'milestone']),
    description: z.string(),
    icon: z.string().default('💼')
  })
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/gallery' }),
  schema: z.object({
    title: z.string(),
    photo: z.string(),
    caption: z.string().optional(),
    date: z.date().optional()
  })
});

export const collections = { blog, projects, timeline, gallery };
