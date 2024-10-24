import * as z from "zod";

export const repositories = z.object({
  name: z.string().optional().nullable(),
  html_url: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  homepage: z.string().optional().nullable(),
  language: z.string().optional().nullable(),
  stargazers_count: z.union([z.string(), z.number()]),
  forks_count: z.number(),
  pushed_at: z.string().nullable(),
});
