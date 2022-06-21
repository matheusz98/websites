import "./styles/globals.css";
import "./styles/themes.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import Header from "./components/Header";
import { useEffect } from "react";
import Home from "./components/Home";
import Divider from "./components/Divider";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 16,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="layout">
      <Header />
      <main>
        <Home />
        <Divider type={1} />
        <About />
        <Divider type={2} />
        <Services />
        <Divider type={1} />
        <Testimonials />
        <Divider type={2} />
        <Contact />
        <Divider type={1} />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
