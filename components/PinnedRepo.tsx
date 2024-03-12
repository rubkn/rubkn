import Star from '@utils/svg/Star';
import { GitHubPinnedItem } from '@lib/types';

const PinnedRepo = ({
  url,
  name,
  description,
  stargazerCount,
  languages
}: GitHubPinnedItem) => {
  return (
    <a href={url} className="flex flex-col justify-center py-4">
      <div className="cursor-pointer transition-all hover:scale-95 hover:duration-300">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">{name}</span>
          <div className="flex space-x-3">
            {stargazerCount >= 0 ? (
              <div className="flex items-center justify-end space-x-1">
                <span className="text-sm">{stargazerCount}</span>
                <Star className="h-3 w-3" />
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 text-black-400 dark:text-black-200">
          <span>{description}</span>
          <div className="flex items-end space-x-2">
            {Object.entries(languages)
              .slice(0, 1)
              .map(([langName, color]) => {
                return (
                  <div key={langName} className="flex items-center">
                    <div
                      className="h-1 w-1 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span className="pl-1 text-sm font-medium">{langName}</span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </a>
  );
};

export default PinnedRepo;
