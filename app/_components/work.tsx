import useSWR from 'swr';

import PinnedRepo from './repo';
import fetcher from '@/lib/fetcher';
import { type GitHubResponse } from '@/lib/types';

const FeaturedWork = () => {
  const { data, isLoading, error } = useSWR<GitHubResponse>('/api/github', fetcher);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Sorry, there was an error displaying my featured projects...</h1>;
  if (!data) return <h1>No featured projects at the moment...</h1>;

  return (
    <section className="mb-12">
      <h2 className="mb-4 text-lg font-medium">some featured projects</h2>
      <div className="grid grid-cols-2 gap-4">
        {data?.pinnedItems?.map((item, index) => {
          const { url, name, description, languages, stargazerCount, forkCount } = item;

          return (
            <PinnedRepo
              key={index}
              url={url}
              name={name}
              description={description}
              languages={languages}
              stargazerCount={stargazerCount}
              forkCount={forkCount}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedWork;
