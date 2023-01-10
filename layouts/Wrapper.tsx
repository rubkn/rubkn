import Header from '@components/Header';
import Head from 'next/head';
import { type ReactNode } from 'react';

const Wrapper = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Head>
        <title>rubkn</title>
        <meta name="description" content="rubkn's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Wrapper;
