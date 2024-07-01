import Footer from './_components/footer';
import Header from '@/app/_components/header';
import Hello from './_components/hello';
import FeaturedWork from './_components/work';

export default function Home() {
  return (
    <>
      <main className="p-6 m-auto flex w-full flex-col text-base font-light leading-relaxed antialiased shadow-2xl">
        <Hello />
        {/* <FeaturedPosts /> */}
        <FeaturedWork />
      </main>
      <Footer />
    </>
  );
}
