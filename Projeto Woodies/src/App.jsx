import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyles from "./GlobalStyles";
import { aboutContentOne, aboutContentTwo } from "./data/aboutData";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <About {...aboutContentOne} />
      <About {...aboutContentTwo} />
    </>
  );
}

export default App;
