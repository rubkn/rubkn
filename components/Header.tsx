import { type FC, useState } from 'react';
import MenuIcon from '@utils/svg/menu';
import CloseIcon from '@utils/svg/cross';
import SunIcon from '@utils/svg/sun';
import LanguageIcon from '@utils/svg/lang';

const links = [
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' }
];

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const InvisibleMenu: FC = () => {
    return (
      <div className="fixed top-0 left-0 z-10 h-full w-full bg-black-500">
        <div className="flex h-full flex-col items-center justify-center">
          <div className="flex flex-col space-y-4">
            <span
              onClick={toggleMenu}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-400"
            >
              <CloseIcon className="h-7 w-7" />
            </span>
            <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-400">
              <LanguageIcon className="h-6 w-6" />
            </span>
            <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-400">
              <SunIcon className="h-6 w-6" />
            </span>
            <div className="flex flex-col space-y-4 ">
              {links.map((link) => {
                return (
                  <a className="font-bold text-black-100" href={link.to}>
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <header>
      <nav className="flex flex-row items-center justify-between">
        <section>
          <span
            onClick={toggleMenu}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-400"
          >
            <MenuIcon className="h-7 w-7" />
          </span>
        </section>
        <section className="flex space-x-2">
          <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-400">
            <LanguageIcon className="h-6 w-6" />
          </span>
          <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-400">
            <SunIcon className="h-6 w-6" />
          </span>
        </section>
      </nav>
      {menuOpen && <InvisibleMenu />}
    </header>
  );
};

export default Header;
