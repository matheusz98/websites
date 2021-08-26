import React, { useState } from "react";
import "../../Styles/Creations/Creations.css";
import data from "../../Data/DataDesktop";

const CreationsDesktop = () => {
  const [cards, setCards] = useState(data);

  return (
    <>
      <div className="creations-desktop">
        <div className="title">
          <h2>Our Creations</h2>
          <div className="btn-content">
            <button className="btn-content-btn">See All</button>
          </div>
        </div>
        <section>
          {cards.map((card) => {
            const { id, image, title } = card;
            return (
              <article key={id} className="creations-desktop-cards">
                <div>
                  <img src={image} alt="Creations Card" />
                </div>
                <h3>{title}</h3>
              </article>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default CreationsDesktop;
