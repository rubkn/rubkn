export type PinnedResponse = {
  name: string;
  bio: string | null;
  company: string | null;
  twitterUsername: string | null;
  websiteUrl: string | null;
  url: string | null;
  pinnedItems: PinnedItem[];
};

export type PinnedItem = {
  name: string;
  description: string;
  url: string;
  stargazerCount: number | null;
  forkCount: number | null;
  homepageUrl: string;
  languages: Record<string, string | undefined>;
};
