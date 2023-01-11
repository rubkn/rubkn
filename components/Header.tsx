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

const Header: FC = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useTranslation('common');

  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<'en' | 'pt'>('en');

  const links = [
    { to: '/', label: `${t('nav.home')}` },
    { to: '/blog', label: `${t('nav.blog')}` },
    { to: '/about', label: `${t('nav.about')}` },
    { to: '/projects', label: `${t('nav.projects')}` },
    { to: '/contact', label: `${t('nav.contact')}` }
  ];

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
      <main className="fixed top-0 left-0 z-10 h-full w-full bg-black-100 dark:bg-black-500">
        <section className="m-auto h-full max-w-prose p-8">
          <nav className="flex flex-row items-start justify-between">
            <div className="flex">
              <span
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-200 dark:hover:bg-black-400"
              >
                <CloseIcon className="h-7 w-7" />
              </span>
            </div>
            <div className="flex space-x-2">
              <span
                onClick={toggleLanguage}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-200 dark:hover:bg-black-400"
              >
                <LanguageIcon className="h-6 w-6" />
              </span>
              <span
                onClick={() =>
                  setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
                }
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-200 dark:hover:bg-black-400"
              >
                {resolvedTheme === 'dark' ? (
                  <SunIcon className="h-6 w-6" />
                ) : (
                  <MoonIcon className="h-6 w-6" />
                )}
              </span>
            </div>
          </nav>
          <section className="py-10">
            {links.map((link) => (
              <div
                key={link.to}
                className="py-2 text-4xl font-semibold text-black-500 dark:text-white"
              >
                {link.label}
              </div>
            ))}
          </section>
        </section>
      </main>
    );
  };

  return (
    <>
      {mounted && (
        <header>
          <nav className="flex flex-row items-center justify-between">
            <div>
              <span
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-200 dark:hover:bg-black-400"
              >
                <MenuIcon className="h-7 w-7" />
              </span>
            </div>
            <div className="flex space-x-2">
              <span
                onClick={toggleLanguage}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-200 dark:hover:bg-black-400"
              >
                <LanguageIcon className="h-6 w-6" />
              </span>
              <span
                onClick={() =>
                  setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
                }
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-200 dark:hover:bg-black-400"
              >
                {resolvedTheme === 'dark' ? (
                  <SunIcon className="h-6 w-6" />
                ) : (
                  <MoonIcon className="h-6 w-6" />
                )}
              </span>
            </div>
          </nav>
          {menuOpen && <InvisibleMenu />}
        </header>
      )}
    </>
  );
};

export default Header;
