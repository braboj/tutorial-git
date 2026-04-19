import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const docs = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/docs",
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    section: z.string(),
    order: z.number(),
    subsection: z.string().optional(),
    subsectionOrder: z.number().optional(),
  }),
});

export const collections = { docs };
