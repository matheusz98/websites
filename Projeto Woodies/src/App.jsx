import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyles from "./GlobalStyles";
import { aboutContentOne, aboutContentTwo } from "./data/aboutData";
import {
  titleContentOne,
  titleContentTwo,
  titleContentThree,
  titleContentFour,
} from "./data/titleData";
import Title from "./components/Title";
import How from "./components/How";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Title {...titleContentOne} />
      <About {...aboutContentOne} />
      <About {...aboutContentTwo} />
      <Title {...titleContentTwo} />
      <How />
    </>
  );
}

export default App;
