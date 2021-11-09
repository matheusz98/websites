import About from "./components/About";
import Brands from "./components/Brands";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyles from "./GlobalStyles";
import { aboutDataOne, aboutDataTwo } from "./data/aboutData";
import Features from "./components/Features";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Brands />
      <About {...aboutDataOne} />
      <About {...aboutDataTwo} />
      <Features />
    </>
  );
}

export default App;
