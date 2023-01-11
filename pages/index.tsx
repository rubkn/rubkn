import Wrapper from '@layouts/Wrapper';
import { Suspense } from 'react';

const Home = () => {
  return (
    <Suspense fallback={null}>
      <Wrapper>
        <main className="py-10">
          <div className="text-6xl font-bold tracking-tight">
            Hey, I'm <br />
            Ruben Brandão
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

export default Home;
