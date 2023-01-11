import { Suspense } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Wrapper from '@layouts/Wrapper';
import Hello from '@components/Hello';

const Home = () => {
  const { t } = useTranslation('common');

  return (
    <Suspense fallback={null}>
      <Wrapper>
        <Hello />
      </Wrapper>
    </Suspense>
  );
};

export async function getStaticProps({ locale = 'en' }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
      // Will be passed to the page component as props
    }
  };
}

export default Home;
