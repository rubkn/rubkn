import { useState } from 'react';
import MenuIcon from '@utils/svg/menu';
import CloseIcon from '@utils/svg/cross';
import SunIcon from '@utils/svg/sun';
import LanguageIcon from '@utils/svg/lang';

const links = [
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' }
];

{
  links.map((link) => {
    return (
      <a className="font-bold text-black-100" href={link.to}>
        {link.label}
      </a>
    );
  });
}

const Header = () => {
  const [isOpen, toggle] = useState<boolean>(false);

  return (
    <header>
      <nav className="flex flex-row items-center justify-end space-x-5">
        <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-400">
          <SunIcon className="h-6 w-6" />
        </span>
        <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-400">
          <LanguageIcon className="h-6 w-6" />
        </span>
        <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-400">
          <MenuIcon className="h-6 w-6" />
        </span>
      </nav>
    </header>
  );
};

export default Header;
