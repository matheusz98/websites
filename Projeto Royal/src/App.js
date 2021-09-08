import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dropdown from './components/Dropdown/Dropdown';
import Hero from './components/Hero/Hero';
import GlobalStyle from './globalStyles';
import { SliderData } from './data/SliderData';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
    </Router>
  );
}

export default App;
