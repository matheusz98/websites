import React from 'react';
import { Button } from './Button';
import './Hero.css';
import '../App.css';

function Hero() {
    return (
        <div className="hero-container">
            <video src="/videos/1.mp4" autoPlay loop muted />
            <h1>Uma grande aventura o aguarda</h1>
            <p>Embarque conosco!</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Comece já!                    
                </Button>

                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    Nossos trabalhos
                </Button>
            </div>
        </div>
    );
}

export default Hero;