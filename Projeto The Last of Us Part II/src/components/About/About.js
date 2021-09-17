import styles from "./About.module.scss";

const About = ({ title, paragraphOne, paragraphTwo, image, alt, reverse }) => {
  return (
    <div className={styles.about}>
      <div className={styles.about_container}>
        <div className={styles.about_container_left}>
          <h2>{title}</h2>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
        </div>
        <div className={styles.about_container_right} reverse={reverse}>
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default About;
