import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import { InfoAbout } from "./data/DataAbout";
import { FeaturesContent } from './data/DataFeatures';
import Features from "./components/Features/Features";
import Videos from "./components/Videos/Videos";
import Accolades from "./components/Accolades/Accolades";
import Gallery from './components/Gallery/Gallery';
import Footer from "./components/Footer/Footer";
import "./styles/app.scss";

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <About {...InfoAbout} />
      <Features {...FeaturesContent} />
      <Videos />
      <Accolades />
      <Gallery />
      <Footer />
    </Router>
  );
}

export default App;
