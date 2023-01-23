import Fork from '@svg/fork';
import Star from '@svg/star';
import { type PinnedItem } from '@lib/types';

const PinnedRepo = ({
  url,
  name,
  description,
  stargazerCount,
  forkCount,
  languages
}: PinnedItem) => {
  return (
    <div className="flex flex-col justify-center py-4">
      <div className="cursor-pointer hover:scale-95 hover:duration-300">
        <div className="flex flex-row items-center justify-between">
          <span className="text-lg font-medium">{name}</span>
          <div className="flex flex-row space-x-4">
            {stargazerCount >= 0 ? (
              <div className="flex flex-row items-center justify-end space-x-1">
                <span className="text-sm">{stargazerCount}</span>
                <Star className="h-3 w-3" />
              </div>
            ) : null}
            {forkCount > 0 ? (
              <div className="flex flex-row items-center justify-end space-x-1">
                <span className="text-sm">{forkCount}</span>
                <Fork className="h-3 w-3" />
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-row items-center justify-between pt-1 text-black-400 dark:text-black-200">
          <div>{description}</div>
          <div className="flex flex-row items-center justify-end space-x-2">
            {Object.entries(languages)
              .slice(0, 1)
              .map(([langName, color]) => {
                return (
                  <div key={langName} className="flex flex-row items-center">
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
    </div>
  );
};

export default PinnedRepo;
