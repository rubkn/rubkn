import { Suspense } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Wrapper from '@layouts/Wrapper';

const Home = () => {
  const { t } = useTranslation('common');

  return (
    <Suspense fallback={null}>
      <Wrapper>
        <main className="py-10">
          <div className="text-6xl font-bold tracking-tight">
            {t('hello')}
            <br />
            {t('name')}
          </div>
          <div className="py-5 text-black-100">
            Developer looking to build cool things and work with awesome people.
            Cinema enthusiast. Analog photography and car rides lover.
          </div>
        </main>
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
