import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h2>Confira um pouco do nosso trabalho!</h2>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem 
                            src="images/banner.jpg"
                            text="Lorem ipsum dolor sit amet"
                            label="Aventura"
                            path="/servicos"
                        />
                    </ul>
                    <ul className="cards-items">
                        <CardItem 
                            src="images/1.jpg"
                            text="Lorem ipsum dolor sit amet"
                            label="Aventura"
                            path="/servicos"
                        />

                        <CardItem 
                            src="images/2.jpg"
                            text="Lorem ipsum dolor sit amet"
                            label="Aventura"
                            path="/servicos"
                        />

                        <CardItem 
                            src="images/3.jpg"
                            text="Lorem ipsum dolor sit amet"
                            label="Aventura"
                            path="/servicos"
                        />
                    </ul>

                    <ul className="cards-items">
                        <CardItem 
                            src="images/4.jpg"
                            text="Lorem ipsum dolor sit amet"
                            label="Aventura"
                            path="/servicos"
                        />

                        <CardItem 
                            src="images/5.jpg"
                            text="Lorem ipsum dolor sit amet"
                            label="Aventura"
                            path="/servicos"
                        />

                        <CardItem 
                            src="images/6.jpg"
                            text="Lorem ipsum dolor sit amet"
                            label="Aventura"
                            path="/servicos"
                        />
                    </ul>

                    <ul className="cards-items">
                        <CardItem 
                            src="images/7.jpg"
                            text="Lorem ipsum dolor sit amet"
                            label="Aventura"
                            path="/servicos"
                        />

                        <CardItem 
                            src="images/8.jpg"
                            text="Lorem ipsum dolor sit amet"
                            label="Aventura"
                            path="/servicos"
                        />

                        <CardItem 
                            src="images/9.jpg"
                            text="Lorem ipsum dolor sit amet"
                            label="Aventura"
                            path="/servicos"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;