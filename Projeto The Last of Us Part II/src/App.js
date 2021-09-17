import "./styles/app.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import { InfoAbout } from "./data/DataAbout";

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <About {...InfoAbout} />
    </Router>
  );
}

export default App;
