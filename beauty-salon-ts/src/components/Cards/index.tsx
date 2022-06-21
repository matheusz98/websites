import { cardItems } from "../../data/cardsData";
import styles from "./cards.module.css";

const Cards = () => {
  return (
    <div className={styles.cards}>
      {Object.entries(cardItems).map(([key, card]) => (
        <div
          key={key}
          className={styles.card}
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <i>
            <img src={card.image.src} alt={card.image.alt} />
          </i>
          <h3>{card.title}</h3>
          <p>{card.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
