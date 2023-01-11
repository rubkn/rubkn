import { type FC, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { i18n } from 'next-i18next.config';
import { useTranslation } from 'next-i18next';

import MenuIcon from '@utils/svg/menu';
import CloseIcon from '@utils/svg/cross';
import SunIcon from '@utils/svg/sun';
import MoonIcon from '@utils/svg/moon';
import LanguageIcon from '@utils/svg/lang';

const links = [
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' }
];

const Header: FC = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<'en' | 'pt'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
    router.push({ pathname, query }, asPath, {
      locale: language
    });
  };
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const InvisibleMenu: FC = () => {
    return (
      <div className="fixed top-0 left-0 z-10 h-full w-full bg-black-500">
        <div className="flex h-full flex-col items-center justify-center">
          <div className="flex flex-col space-y-4">
            <span
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-100 dark:hover:bg-black-100"
            >
              <CloseIcon className="h-7 w-7" />
            </span>
            <span
              onClick={toggleLanguage}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-400"
            >
              <LanguageIcon className="h-6 w-6" />
            </span>
            <span
              onClick={() =>
                setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
              }
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-400"
            >
              {resolvedTheme === 'dark' ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </span>
            <div className="flex flex-col space-y-4">
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
    <>
      {mounted && (
        <header>
          <nav className="flex flex-row items-center justify-between">
            <section>
              <span
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-400"
              >
                <MenuIcon className="h-7 w-7" />
              </span>
            </section>
            <section className="flex space-x-2">
              <span
                onClick={toggleLanguage}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-400"
              >
                <LanguageIcon className="h-6 w-6" />
              </span>
              <span
                onClick={() =>
                  setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
                }
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-400"
              >
                {resolvedTheme === 'dark' ? (
                  <SunIcon className="h-6 w-6" />
                ) : (
                  <MoonIcon className="h-6 w-6" />
                )}
              </span>
            </section>
          </nav>
          {menuOpen && <InvisibleMenu />}
        </header>
      )}
    </>
  );
};

export default Header;
