import HomePageContent from "./HomePageContent";
import VideoBG from "../../images/hero.mp4";
import styles from "./Hero.module.scss";

const Hero = ({ isDynamic, children }) => {
  return (
    <div className={styles.container}>
      <video
        src={VideoBG}
        id={"video"}
        autoPlay={true}
        muted
        loop
        className={styles.video}
      ></video>
      <div className={styles.hero}>
        <div className={styles.hero_content}>
          {!isDynamic && <HomePageContent />}
          {isDynamic && (
            <h1 className={styles.hero_content_title}>{children}</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
