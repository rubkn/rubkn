import { GitHubResponse } from '@utils/types';
import PinnedRepo from './PinnedRepo';

import response from '@fixtures/github.json';

/* const FeaturedWork = ({ work }: { work: GitHubResponse }) */
const FeaturedWork = () => {
  return (
    <main className="animate-in fade-in">
      <div className="text-3xl font-bold tracking-tight">Featured Work</div>
      <div className="divide-y divide-black-200 dark:divide-black-400">
        {response.pinnedItems.map((item) => {
          return (
            <PinnedRepo
              url={item.url}
              name={item.name}
              description={item.description}
              languages={item.languages}
              stargazerCount={item.stargazerCount}
              forkCount={item.forkCount}
            />
          );
        })}
      </div>
    </main>
  );
};

export default FeaturedWork;
