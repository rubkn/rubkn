import Fork from '@utils/svg/Fork';
import Star from '@utils/svg/Star';
import { type GitHubPinnedItem } from '@lib/types';

const BlogPost = ({
  url,
  name,
  description,
  stargazerCount,
  forkCount,
  languages
}: GitHubPinnedItem) => {
  return (
    <div className="flex flex-col justify-center py-4">
      <div className="cursor-pointer hover:scale-95 hover:duration-300">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">{name}</span>
          <div className="flex space-x-4">
            <div className="flex items-center justify-end space-x-1">
              <span>{stargazerCount}</span>
              <Star className="h-4 w-4" />
            </div>
            <div className="flex items-center justify-end space-x-1">
              <span>{forkCount}</span>
              <Fork className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="pt-1 text-black-400 dark:text-black-200">
          {description}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
