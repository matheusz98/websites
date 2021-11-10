import Content from "../components/Content";
import Hero from "../components/Hero";
import { contentOne, contentTwo, contentThree } from "../data/homeContent";

const Home = () => {
  return (
    <>
      <Hero />
      <Content {...contentOne} />
      <Content {...contentTwo} />
      <Content {...contentThree} />
    </>
  );
};

export default Home;
