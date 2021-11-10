import Content from "../components/Content";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import { contentOne, contentTwo, contentThree } from "../data/homeContent";

const Home = () => {
  return (
    <>
      <Hero />
      <Content {...contentOne} />
      <Content {...contentTwo} />
      <Content {...contentThree} />
      <Pricing />
    </>
  );
};

export default Home;
