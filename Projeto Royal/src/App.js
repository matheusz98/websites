import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import GlobalStyle from './globalStyles';
import { SliderData } from './data/SliderData';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero slides={SliderData} />
    </Router>
  );
}

export default App;
