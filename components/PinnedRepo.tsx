import Fork from '@utils/svg/fork';
import Star from '@utils/svg/star';
import { type PinnedItem } from '@utils/types';

const PinnedRepo = ({
  url,
  name,
  description,
  stargazerCount,
  forkCount,
  languages
}: PinnedItem) => {
  return (
    <div className="my-2 flex h-24 flex-col justify-center">
      <div className="cursor-pointer hover:scale-95 hover:duration-300">
        <div className="flex flex-row items-center justify-between">
          <span className="text-lg font-medium">{name}</span>
          <div className="flex flex-row space-x-4">
            <div className="flex flex-row items-center justify-end space-x-1">
              <span>{stargazerCount}</span>
              <Star className="h-4 w-4" />
            </div>
            <div className="flex flex-row items-center justify-end space-x-1">
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

export default PinnedRepo;
