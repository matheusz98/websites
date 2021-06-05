import React from 'react';
import Hero from '../Hero';
import Cards from '../Cards';
import Footer from '../Footer';
import '../../App.css';

function Home() {
    return (
        <>
            <Hero />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;