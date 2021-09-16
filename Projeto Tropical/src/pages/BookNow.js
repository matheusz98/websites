import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";

const BookNow = () => {
  useScrollToTop();

  return (
    <>
      <Hero isDynamic>Book Now!</Hero>
    </>
  );
};

export default BookNow;
