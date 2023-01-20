import { type FC, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { animated, useSpring } from '@react-spring/web';

import MenuIcon from '@utils/svg/menu';
import CloseIcon from '@utils/svg/cross';
import SunIcon from '@utils/svg/sun';
import MoonIcon from '@utils/svg/moon';
import Link from 'next/link';

const Header: FC = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useTranslation('common');

  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [menuIcon, animateMenu] = useSpring(() => ({
    from: { opacity: 1, scale: 1 }
  }));

  const [themeIcon, animateTheme] = useSpring(() => ({
    from: { opacity: 1, scale: 1 }
  }));

  const [sliderMenu, animateSlide] = useSpring(() => ({
    from: { x: -100, opacity: 0 }
  }));

  const links = [
    { to: '/', label: `${t('nav.home')}` },
    { to: '/blog', label: `${t('nav.blog')}` },
    { to: '/about', label: `${t('nav.about')}` },
    { to: '/projects', label: `${t('nav.projects')}` }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    animateMenu.start({
      from: { opacity: 0, scale: 0 },
      to: { opacity: 1, scale: 1 }
    });
    animateSlide.start({
      from: { x: -100, opacity: 0 },
      to: { x: 0, opacity: 1 }
    });
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    animateTheme.start({
      from: {
        opacity: 0,
        scale: 0
      },
      to: {
        opacity: 1,
        scale: 1
      }
    });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const NavBar: FC = () => {
    return (
      <>
        <animated.span
          style={menuIcon}
          onClick={toggleMenu}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-200 dark:hover:bg-black-400"
        >
          {isMenuOpen ? (
            <CloseIcon className="h-7 w-7" />
          ) : (
            <MenuIcon className="h-7 w-7" />
          )}
        </animated.span>
        <div className="flex space-x-2">
          <animated.span
            style={themeIcon}
            onClick={toggleTheme}
            className="animate-fade-in flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-200 dark:hover:bg-black-400"
          >
            {resolvedTheme === 'dark' ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </animated.span>
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
          <animated.section style={sliderMenu} className="py-8">
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
          </animated.section>
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
          {isMenuOpen && <InvisibleMenu />}
        </header>
      )}
    </>
  );
};

export default Header;
