import { PinnedItem } from "./types";

export async function fetchPinnedRepos(): Promise<PinnedItem[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/rubkn`);

  if (!response.ok) {
    throw new Error("Failed to fetch pinned repositories");
  }

  const repos: PinnedItem[] = await response.json();

  return repos;
}
