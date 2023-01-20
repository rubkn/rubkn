import { Suspense } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Wrapper from '@layouts/Wrapper';
import Hello from '@components/Hello';
import FeaturedWork from '@components/FeaturedWork';
import { GitHubResponse } from '@utils/types';
import FeaturedPosts from '@components/FeaturedPosts';

const Home = ({ work }: { work: GitHubResponse }) => {
  const { t } = useTranslation('common');

  return (
    <Suspense fallback={null}>
      <Wrapper>
        <Hello />
        {/* <FeaturedPosts /> */}
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
