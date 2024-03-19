import { type FC } from 'react';

import Link from 'next/link';
import navigationLinks from '@/utils/navigation-links';

const Header: FC = () => {
  return (
    <>
      <header className="mb-10 flex justify-between text-neutral-500">
        <h1>ruben</h1>
        <nav className="flex items-center justify-between gap-4">
          {/* {navigationLinks.map((link) => (
            <Link
              key={link.label}
              rel="noopener noreferrer"
              target="_blank"
              href={link.to}
            >
              {link.label}
            </Link>
          ))} */}
        </nav>
      </header>
    </>
  );
};

export default Header;
