import About from "./components/About/About";
import Category from "./components/Category/Category";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./globalStyles";
import { aboutData } from "./data/aboutData";
import { discountsData } from "./data/discountsData";
import Candy from "./components/Candy/Candy";
import Discounts from "./components/Discounts/Discounts";
import New from "./components/New/New";
import Newsletter from "./components/Newsletter/Newsletter";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Category />
      <About {...aboutData} />
      <Candy />
      <Discounts {...discountsData} />
      <New />
      <Newsletter />
    </>
  );
};

export default App;
