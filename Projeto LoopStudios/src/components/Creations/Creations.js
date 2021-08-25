import React, { useState } from "react";
import "../../Styles/Creations/Creations.css";
import data from "../../Data/DataMobile";

const Creations = () => {
  const [cards, setCards] = useState(data);

  return (
    <>
      <div className="creations-mobile">
        <h2>Our Creations</h2>
        <section>
          {cards.map((card) => {
            const { id, image, title } = card;
            return (
              <article key={id} className="creations-mobile-cards">
                <div>
                  <img src={image} alt="Creations Card" />
                </div>
                <h3>{title}</h3>
              </article>
            );
          })}
        </section>
        <div className="btn-content">
          <button className="btn-content-btn">See All</button>
        </div>
      </div>
    </>
  );
};

export default Creations;
