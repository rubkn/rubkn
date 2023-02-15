import Wrapper from '@layouts/Wrapper';
import Hello from '@components/Hello';
import FeaturedWork from '@components/FeaturedWork';
import FeaturedPosts from '@components/FeaturedPosts';

const Home = () => {
  return (
    <Wrapper>
      <Hello />
      <FeaturedPosts />
      <FeaturedWork />
    </Wrapper>
  );
};

export default Home;
