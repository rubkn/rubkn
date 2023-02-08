import { type FC, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { animated, useSpring } from '@react-spring/web';

import MenuIcon from '@utils/svg/Menu';
import CloseIcon from '@utils/svg/Cross';
import SunIcon from '@utils/svg/Sun';
import MoonIcon from '@utils/svg/Moon';
import Link from 'next/link';

const Header: FC = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { resolvedTheme, setTheme } = useTheme();

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
    { to: '/', label: 'Home' },
    { to: '/blog', label: 'Blog' },
    { to: '/about', label: 'About' },
    { to: '/work', label: 'Work' }
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
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black-200 dark:hover:bg-black-400"
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
      <main className="fixed top-0 left-0 z-10 h-full w-full bg-black-100 dark:bg-black-500">
        <section className="m-auto h-full max-w-prose p-8">
          <nav className="flex items-start justify-between">
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
          <nav className="flex items-center justify-between">
            <NavBar />
          </nav>
          {isMenuOpen && <InvisibleMenu />}
        </header>
      )}
    </>
  );
};

export default Header;
