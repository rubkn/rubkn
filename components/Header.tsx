import { type FC, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import MenuIcon from '@utils/svg/menu';
import CloseIcon from '@utils/svg/cross';
import SunIcon from '@utils/svg/sun';
import MoonIcon from '@utils/svg/moon';
import LanguageIcon from '@utils/svg/lang';
import { Language } from '@utils/types';
import Link from 'next/link';

const Header: FC = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useTranslation('common');

  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>('en');

  const links = [
    { to: '/', label: `${t('nav.home')}` },
    { to: '/blog', label: `${t('nav.blog')}` },
    { to: '/about', label: `${t('nav.about')}` },
    { to: '/projects', label: `${t('nav.projects')}` }
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

  const NavBar: FC = () => {
    const [effect, setEffect] = useState<boolean>(false);

    return (
      <>
        <div>
          <span
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-200 dark:hover:bg-black-400"
          >
            {menuOpen ? (
              <CloseIcon className="h-7 w-7" />
            ) : (
              <MenuIcon className="h-7 w-7" />
            )}
          </span>
        </div>
        <div className="flex space-x-2">
          <span
            onClick={toggleLanguage}
            className="animate-fade-in flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-200 dark:hover:bg-black-400"
          >
            <LanguageIcon className="h-6 w-6" />
          </span>
          <span
            onClick={() =>
              setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
            }
            className="animate-fade-in flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-200 dark:hover:bg-black-400"
          >
            {resolvedTheme === 'dark' ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </span>
        </div>
      </>
    );
  };

  const InvisibleMenu: FC = () => {
    return (
      <main className="animate-in fade-in fixed top-0 left-0 z-10 h-full w-full bg-black-100 dark:bg-black-500">
        <section className="m-auto h-full max-w-prose p-8">
          <nav className="flex flex-row items-start justify-between">
            <NavBar />
          </nav>
          <section className="py-8">
            {links.map((link) => (
              <div
                key={link.to}
                className="py-8 text-3xl font-semibold tracking-tight"
              >
                <Link href={link.to} className="p-2">
                  {link.label}
                </Link>
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
          <nav className="animate-in fade-in flex flex-row items-center justify-between">
            <NavBar />
          </nav>
          {menuOpen && <InvisibleMenu />}
        </header>
      )}
    </>
  );
};

export default Header;
