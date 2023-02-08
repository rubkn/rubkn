export type GitHubResponse = {
  name: string;
  bio: string | null;
  company: string | null;
  twitterUsername: string | null;
  websiteUrl: string | null;
  url: string | null;
  pinnedItems: GitHubPinnedItem[];
};

export type GitHubPinnedItem = {
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
  // Record<string, string | undefined> to satisfy the following error:
  // Type '{ TypeScript: string; JavaScript: string; Astro?: undefined; }' is not assignable to type 'Record<string, string>'.
  languages: Record<string, string | undefined>;
};
