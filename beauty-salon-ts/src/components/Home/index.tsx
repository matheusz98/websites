import Button from "../Button";
import styles from "./home.module.css";

const Home = () => {
  return (
    <section className={`section ${styles.home}`} id="home">
      <div className={`container grid ${styles.homeContainer}`}>
        <div
          className={styles.image}
          data-aos="fade-down"
          data-aos-duration="700"
        >
          <img
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFpcmRyZXNzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Mulher sorrindo penteando outra mulher"
          />
        </div>
        <div
          className={styles.text}
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h2>Saúde natural para os seus cabelos</h2>
          <p>
            Um salão exclusivo em São Paulo, especializado em tratamentos
            naturais.
          </p>
          <Button content="Agendar um horário" reference="/" />
        </div>
      </div>
    </section>
  );
};

export default Home;
