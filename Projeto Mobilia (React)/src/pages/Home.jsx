import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import NavbarItems from "../components/Navbar/NavbarItems";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavbarItems isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};

export default Home;
