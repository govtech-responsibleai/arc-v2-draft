import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

// src/content/docs/ is written by scripts/build_site.py from docs/ and the register; edit docs/ instead.
export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // What the page's link-preview card shows besides its title (src/og/card.ts)
        arcCard: z.object({ tag: z.string().optional(), sprite: z.string().optional() }).optional(),
      }),
    }),
  }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
