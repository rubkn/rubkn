"use client";

import Link from "next/link";
import { PinnedItem } from "../lib/types";

export default function PinnedRepo(repo: PinnedItem) {
  return (
    <article className="flex flex-col gap-2">
      <Link
        href={repo.url}
        className="underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-600"
      >
        {repo.name}
      </Link>
      <span className="text-balance">{repo.description}</span>
    </article>
  );
}
