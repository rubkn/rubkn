import Footer from './_components/footer';
import Hello from './_components/hello';
import FeaturedWork from './_components/work';

export default function Home() {
  return (
    <>
      <main className="max-w-prose mx-auto p-6 w-full text-base font-light leading-relaxed antialiased shadow-2xl">
        <Hello />
        <FeaturedWork />
      </main>
      <Footer />
    </>
  );
}
