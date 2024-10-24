import "server-only";

import { unstable_cache as cache } from "next/cache";
import { repositories } from "@/lib/schema";

export async function fetchRepos({ count }: { count: 1 | 2 | 3 | 4 | 5 | 6 }) {
  return await cache(
    async () => {
      const response = await fetch(
        `https://api.github.com/users/rubkn/repos?type=owner&sort=updated&per_page=7`
      );
      if (!response.ok) return [];

      const parsed = repositories.array().safeParse(await response.json());
      if (!parsed.success) return [];

      const sorted = parsed.data
        .sort(
          (a, b) =>
            new Date(b.pushed_at!).getTime() - new Date(a.pushed_at!).getTime()
        )
        .slice(0, count);

      return sorted;
    },
    [`projects-${count}`],
    {
      revalidate: 3600,
    }
  )();
}
