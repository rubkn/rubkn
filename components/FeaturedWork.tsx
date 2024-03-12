import useSWR from 'swr';

import PinnedRepo from './PinnedRepo';
import fetcher from '@lib/fetcher';
import { type GitHubResponse } from '@lib/types';

const FeaturedWork = () => {
  const { data, isLoading, error } = useSWR<GitHubResponse>(
    '/api/github',
    fetcher
  );

  return (
    <main className="pb-16">
      <div className="pb-4 text-3xl font-bold tracking-tight">
        Featured Work
      </div>
      <div className="divide-y divide-black-200 dark:divide-black-400">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
            data?.pinnedItems?.map((item) => (
            <PinnedRepo
              key={item.name}
              url={item.url}
              name={item.name}
              description={item.description}
              languages={item.languages}
              stargazerCount={item.stargazerCount}
              forkCount={item.forkCount}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default FeaturedWork;
