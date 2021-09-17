import Button from "../Button/Button";
import Video from "../../images/video.mp4";
import LogoIMG from "../../images/logo.png";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero} id="home">
      <div className={styles.hero_bg}>
        <video
          src={Video}
          autoPlay={true}
          muted
          loop
          className={styles.video}
        ></video>
      </div>
      <div className={styles.hero_content}>
        <img src={LogoIMG} alt="Logo" />
        <h4>Sony Interactive Entertainment</h4>
        <h5>PS4, PS5</h5>
        <div className={styles.hero_content_button}>
          <Button to="about" outline big>
            Press Start to Begin
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
