import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dropdown from "./components/Dropdown/Dropdown";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import { InfoData, InfoDataTwo, HomeData } from './data/InfoData';
import GlobalStyle from "./globalStyles";
import { SliderData } from "./data/SliderData";
import InfoHomes from "./components/InfoHomes/InfoHomes";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <Info { ...InfoData} />
      <InfoHomes { ...HomeData} />
      <Info { ...InfoDataTwo} />
    </Router>
  );
}

export default App;
