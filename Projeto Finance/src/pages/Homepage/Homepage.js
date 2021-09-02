import { useState } from 'react';
import NavBar from "../../components/NavBar/NavBar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Hero from '../Hero/Hero';

const Homepage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle} />
           <NavBar toggle={toggle} /> 
           <Hero />
        </>
    )
}

export default Homepage;
