import Header from '@components/Header';

const Home = () => {
  return (
    <main>
      <Header />
      <section className="py-10">
        <div className="text-6xl font-bold tracking-tight">
          Hey, I'm <br />
          Ruben Brandão
        </div>
        <div className="py-5 text-black-100">
          Developer looking to build cool things and work with awesome people.
          Cinema enthusiast, analog photography lover!
        </div>
      </section>
    </main>
  );
};

export default Home;
