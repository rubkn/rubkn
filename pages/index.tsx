import Wrapper from '@layouts/Wrapper';
import Hello from '@components/Hello';
import FeaturedWork from '@components/FeaturedWork';

const Home = () => {
  return (
    <Wrapper>
      <Hello />
      {/* <FeaturedPosts /> */}
      <FeaturedWork />
    </Wrapper>
  );
};

export default Home;
