import styles from "./Features.module.scss";

const Features = ({
  title1,
  paragraph1,
  img1,
  alt1,
  title2,
  paragraph2,
  img2,
  alt2,
  title3,
  paragraph3,
  img3,
  alt3,
}) => {
  return (
    <div className={styles.container} id="features">
      <h2>Uma experiência inovadora</h2>
      <div className={styles.features_content}>
        <div className={styles.features_content_card}>
          <img src={img1} alt={alt1} />
          <h3>{title1}</h3>
          <p>{paragraph1}</p>
        </div>

        <div className={styles.features_content_card}>
          <img src={img2} alt={alt2} />
          <h3>{title2}</h3>
          <p>{paragraph2}</p>
        </div>

        <div className={styles.features_content_card}>
          <img src={img3} alt={alt3} />
          <h3>{title3}</h3>
          <p>{paragraph3}</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
