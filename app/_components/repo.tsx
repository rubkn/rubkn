import { GitHubPinnedItem } from "@/lib/types";
import Link from "next/link";

const PinnedRepo = (repo: GitHubPinnedItem) => {
  const { url, name, description, languages } = repo;

  return (
    <article className="flex flex-col gap-2">
      <Link
        href={url}
        className="underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-600"
      >
        {name}
      </Link>
      <span className="text-balance">{description}</span>
    </article>
  );
};

export default PinnedRepo;
