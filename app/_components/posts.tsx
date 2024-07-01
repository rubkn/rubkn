import useSWR from 'swr';

import BlogPost from './blog-post';
import fetcher from '@/lib/fetcher';
import { GitHubResponse } from '@/lib/types';

const FeaturedPosts = () => {
  const { data, isLoading } = useSWR<GitHubResponse>('/api/github', fetcher);
  //console.log(data);

  return (
    <main className="pb-16">
      <div className="pb-4 text-3xl font-bold tracking-tight">Latest Blog Posts</div>
      <div className="divide-y divide-black-200 dark:divide-black-400">
        {data?.pinnedItems.map((item) => {
          return (
            <BlogPost
              key={item.name}
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

export default FeaturedPosts;
