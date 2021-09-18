import "./styles/app.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import { InfoAbout } from "./data/DataAbout";
import { FeaturesContent } from './data/DataFeatures';
import Features from "./components/Features/Features";

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <About {...InfoAbout} />
      <Features {...FeaturesContent} />
    </Router>
  );
}

export default App;
