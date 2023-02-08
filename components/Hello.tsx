const Hello = () => {
  return (
    <main className="pb-20">
      <div className="text-6xl font-bold tracking-tight">
        Hey, I'm
        <br />
        Ruben Brandão
      </div>
      <div className="pt-4 text-base font-medium text-black-500 dark:text-black-100">
        A web developer looking to build creative projects and collaborate with
        inspiring people. Passionate about tech, cinema and analog photography.
        Love car rides and exploring new places.
      </div>
      <div className="pt-4 text-base font-medium text-black-500 dark:text-black-100">
        Please not that I'm still working on this website. You can check out the
        staging version at{' '}
        <a
          href="https://staging.rubenbrandao.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black-500 hover:text-black-100 dark:text-black-100 dark:hover:text-black-200"
        >
          staging.rubkn.dev
        </a>
      </div>
    </main>
  );
};

export default Hello;
