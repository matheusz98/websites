import { useEffect } from "react";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "../Button/Button";
import Video from "../../images/video.mp4";
import LogoIMG from "../../images/logo.png";
import styles from "./Hero.module.scss";

const Hero = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <div className={styles.hero} id="home">
      <div data-aos="fade" className={styles.hero_bg}>
        <video
          src={Video}
          autoPlay={true}
          muted
          loop
          className={styles.video}
        ></video>
      </div>
      <div data-aos="fade" className={styles.hero_content}>
        <img src={LogoIMG} alt="Logo" />
        <h4>Sony Interactive Entertainment</h4>
        <h5>PS4, PS5</h5>
        <div className={styles.hero_content_button}>
          <Link to="about" spy={true} smooth={true} duration={800}>
            <Button outline big>
              Press Start to Begin
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
