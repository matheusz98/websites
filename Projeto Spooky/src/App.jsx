import About from "./components/About/About";
import Category from "./components/Category/Category";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./globalStyles";
import { aboutData } from "./data/aboutData";
import Candy from "./components/Candy/Candy";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Category />
      <About {...aboutData} />
      <Candy />
    </>
  );
};

export default App;
