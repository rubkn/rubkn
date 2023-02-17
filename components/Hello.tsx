const Hello = () => {
  return (
    <main className="pb-20">
      <div className="text-6xl font-bold tracking-tight">
        Hey, I'm
        <br />
        Ruben Brandão
      </div>
      <div className="pt-4 text-base font-medium text-black-500 dark:text-black-100">
        Please note that this is a experimental version of my website. You can
        find the live version at{' '}
        <a
          href="https://rubkn.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black-500 hover:text-black-100 dark:text-black-100 dark:hover:text-black-200"
        >
          rubkn.dev
        </a>
      </div>
      {/* <div className="pt-4 text-base font-medium text-black-500 dark:text-black-100">
        A web developer looking to build creative projects and collaborate with
        inspiring people. Passionate about tech, cinema and analog photography.
        Love car rides and exploring new places.
      </div> */}
    </main>
  );
};

export default Hello;
