import styled from "styled-components";
import Blog from "./components/Blog";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Possibility from "./components/Possibility";
import WhatGPT3 from "./components/WhatGPT3";
import GlobalStyles from "./GlobalStyles";

const Gradient = styled.div`
  background: -moz-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Gradient>
        <Navbar />
        <Hero />
      </Gradient>
      <Brands />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
