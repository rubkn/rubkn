import { PinnedResponse } from "./types";

export async function fetchPinnedRepos(): Promise<PinnedResponse> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/rubkn`);

  if (!response.ok) {
    throw new Error("Failed to fetch pinned repositories");
  }

  const user: PinnedResponse = await response.json();

  return user;
}
