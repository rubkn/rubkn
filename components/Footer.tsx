import Link from 'next/link';
import { type ReactNode } from 'react';

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
    <footer>
      <hr className="my-8 h-px border-0 bg-black-400" />
      <div className="w-full text-black-300 ">
        <div className="flex flex-row items-center justify-center space-x-8 pb-4">
          <Link href="/" className="hover:text-black-100">
            Home
          </Link>
          <Link href="/about" className="hover:text-black-100">
            About
          </Link>
          <Link href="/blog" className="hover:text-black-100">
            Blog
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center space-x-4">
          <ExternalLink href="https://twitter.com/rubkndotdev">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/rubkn">GitHub</ExternalLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
