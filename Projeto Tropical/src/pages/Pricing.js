import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";

const Pricing = () => {
  useScrollToTop();

  return (
    <>
      <Hero isDynamic>Pricing</Hero>
    </>
  );
};

export default Pricing;
