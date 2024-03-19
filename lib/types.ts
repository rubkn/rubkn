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
  stargazerCount: number | null;
  forkCount: number | null;
  languages: Record<string, string | undefined>;
};
