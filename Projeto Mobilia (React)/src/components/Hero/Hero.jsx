import { useEffect } from "react";
import {
  HeroContainer,
  HeroImg,
  HeroContentContainer,
  HeroArticle,
} from "./HeroStyle";
import Aos from "aos";
import "aos/dist/aos.css";
import HeroIMG from "../../images/home.jpg";
import { Button } from "../Button/Button";

const Hero = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <HeroContainer id="home">
      <HeroImg data-aos="fade-left">
        <img src={HeroIMG} alt="Hero BG" />
      </HeroImg>
      <HeroContentContainer>
        <HeroArticle data-aos="fade-right">
          <h1>
            Trazendo <span>elegância</span> sua casa
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            ut atque cupiditate temporibus repudiandae incidunt dolore soluta
            qui id adipisci, ratione, magni quo! Provident molestiae quos
            maiores in harum. Ullam?
          </p>
          <Button to="about" primary white>
            Compre agora
          </Button>
        </HeroArticle>
      </HeroContentContainer>
    </HeroContainer>
  );
};

export default Hero;
