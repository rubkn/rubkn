import { type ReactNode } from 'react';

import Link from 'next/link';
import GitHubIcon from '@utils/svg/GitHub';
import TwitterIcon from '@utils/svg/Twitter';
import LinkedInIcon from '@utils/svg/LinkedIn';

const ExternalLink = ({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) => (
  <a
    className="hover:text-black-100"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="w-full">
      <hr className="my-8 h-px border-0 bg-black-400" />
      {/* <div className="mb-2 flex items-center justify-center space-x-4 text-black-300">
        <Link href="/" className="hover:text-black-100">
          Home
        </Link>
        <Link href="/about" className="hover:text-black-100">
          About
        </Link>
        <Link href="/blog" className="hover:text-black-100">
          Blog
        </Link>
        <Link href="/work" className="hover:text-black-100">
          Work
        </Link>
      </div> */}
      <div className="flex items-center justify-center space-x-4 text-black-300">
        <ExternalLink href="https://twitter.com/rubkndotdev">
          <TwitterIcon className="h-5 w-5" />
        </ExternalLink>
        <ExternalLink href="https://github.com/rubkn">
          <GitHubIcon className="h-5 w-5" />
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/rubenvbrandao/">
          <LinkedInIcon className="h-5 w-5" />
        </ExternalLink>
      </div>
    </footer>
  );
};

export default Footer;
