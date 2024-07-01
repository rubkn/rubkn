import type { Metadata } from 'next';
import { Inter, Chivo } from 'next/font/google';
import './styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
});

const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-chivo'
});

export const metadata: Metadata = {
  title: 'Ruben Brandão',
  description: 'An emo personal website built with Next!'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-chivo ${inter.variable} ${chivo.variable}`}>
        {children}
      </body>
    </html>
  );
}
