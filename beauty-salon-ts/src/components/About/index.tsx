import styles from "./about.module.css";

const About = () => {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className={`container grid ${styles.aboutContainer}`}>
        <div
          className={styles.image}
          data-aos="fade-down"
          data-aos-duration="700"
        >
          <img
            src="https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt="Três mulheres sorrindo"
          />
        </div>
        <div
          className={styles.text}
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h2>Sobre nós</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            quos reprehenderit repudiandae veniam ipsam vel iure ducimus animi
            neque odio? Pariatur odio corporis nulla autem consequuntur
            asperiores illum commodi delectus!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut,
            praesentium obcaecati doloremque quis quod? Numquam nesciunt dicta
            eligendi. Nam repudiandae voluptates quibusdam ipsa labore neque
            laborum totam veritatis pariatur.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut,
            praesentium obcaecati doloremque quis quod? Numquam nesciunt dicta
            eligendi. Nam repudiandae voluptates quibusdam ipsa labore neque
            laborum totam veritatis pariatur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
