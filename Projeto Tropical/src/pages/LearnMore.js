import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";

const LearnMore = () => {
  useScrollToTop();

  return (
    <>
      <Hero isDynamic>Learn More</Hero>
    </>
  );
};

export default LearnMore;
