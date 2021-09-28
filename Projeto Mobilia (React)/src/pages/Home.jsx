import { useState } from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import NavbarItems from "../components/Navbar/NavbarItems";
import Newsletter from "../components/Newsletter/Newsletter";
import Products from "../components/Products/Products";
import Services from "../components/Services/Services";
import {
  aboutContent,
  productContent,
  servicesContent,
  galleryContent,
} from "../Data/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavbarItems isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About {...aboutContent} />
      <Products {...productContent} />
      <Services {...servicesContent} />
      <Gallery {...galleryContent} />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
