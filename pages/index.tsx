import Head from 'next/head';
import Header from '@/components/Header';
import Hello from '@/components/Hello';
import FeaturedWork from '@/components/FeaturedWork';
import FeaturedPosts from '@/components/FeaturedPosts';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <>
      <Head>
        <title>rubkn</title>
        <meta name="description" content="rubkn's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Hello />
        {/* <FeaturedPosts /> */}
        <FeaturedWork />
        <Footer />
      </main>
    </>
  );
};

export default Home;
