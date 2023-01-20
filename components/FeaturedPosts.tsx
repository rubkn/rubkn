import { GitHubResponse } from '@utils/types';
import PinnedRepo from './PinnedRepo';

import response from '@fixtures/github.json';
import BlogPost from './BlogPost';

const FeaturedPosts = () => {
  return (
    <main className="pb-16">
      <div className="pb-4 text-3xl font-bold tracking-tight">
        Latest Blog Posts
      </div>
      <div className="divide-y divide-black-200 dark:divide-black-400">
        {response.pinnedItems.map((item) => {
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
