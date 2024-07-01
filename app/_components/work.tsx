import { PinnedItem, PinnedResponse } from "@/lib/types";
import { fetchPinnedRepos } from "@/lib/api";
import PinnedRepo from "./repo";

export default async function Work() {
  const user: PinnedResponse = await fetchPinnedRepos();

  return (
    <section className="mb-12">
      <h2 className="mb-4 text-lg font-semibold">some of my work</h2>
      <div className="grid grid-cols-2 gap-4">
        {user.pinnedItems.map((item: PinnedItem, index) => (
          <PinnedRepo
            key={index}
            url={item.url}
            name={item.name}
            description={item.description}
            languages={item.languages}
            stargazerCount={item.stargazerCount}
            forkCount={item.forkCount}
            homepageUrl={item.homepageUrl}
          />
        ))}
      </div>
    </section>
  );
}
