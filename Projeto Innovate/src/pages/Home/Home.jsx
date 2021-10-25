import Carousel from "../../components/Carousel/Carousel";
import Content from "../../components/Content/Content";
import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
import { contentOne, contentTwo, contentThree } from "../../data/ContentData";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Content {...contentOne} />
      <Content {...contentTwo} />
      <Content {...contentThree} />
      <Carousel />
    </>
  );
};

export default Home;
