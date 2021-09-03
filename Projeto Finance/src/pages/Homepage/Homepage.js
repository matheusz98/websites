import { useState } from "react";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../../components/Info/Data";
import Info from "../../components/Info/Info";
import NavBar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Hero from "../Hero/Hero";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
    </>
  );
};

export default Homepage;
