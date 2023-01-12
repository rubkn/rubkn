import { Suspense } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Wrapper from '@layouts/Wrapper';
import Hello from '@components/Hello';
import FeaturedWork from '@components/FeaturedWork';
import { GitHubResponse } from '@utils/types';

const Home = ({ work }: { work: GitHubResponse }) => {
  const { t } = useTranslation('common');

  const response = {
    name: 'Ruben Brandão',
    bio: '',
    company: null,
    twitterUsername: 'rubkndotdev',
    websiteUrl: 'rubenbrandao.com',
    url: 'https://github.com/rubkn',
    pinnedItems: [
      {
        name: 'pinned',
        description: 'An API service to retrieve pinned repos on GitHub',
        url: 'https://github.com/rubkn/pinned',
        stargazerCount: 0,
        forkCount: 0,
        languages: { TypeScript: '#3178c6', JavaScript: '#f1e05a' }
      },
      {
        name: 'rubkn',
        description: 'An emo personal website built with Astro',
        url: 'https://github.com/rubkn/rubkn',
        stargazerCount: 0,
        forkCount: 0,
        languages: { Astro: '#ff5a03', TypeScript: '#3178c6' }
      }
    ]
  };

  return (
    <Suspense fallback={null}>
      <Wrapper>
        <Hello />
        <FeaturedWork />
      </Wrapper>
    </Suspense>
  );
};

export async function getStaticProps({ locale = 'en' }) {
  /* const response = await fetch('/api/github');
  const work = await response.json();
  console.log(work); */

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
      /* work */
    }
  };
}

export default Home;
