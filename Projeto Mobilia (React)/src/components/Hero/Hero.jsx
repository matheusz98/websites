import {
  HeroContainer,
  HeroImg,
  HeroContentContainer,
  HeroArticle,
} from "./HeroStyle";
import HeroIMG from "../../images/home.jpg";
import { Button } from "../Button/Button";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroImg>
        <img src={HeroIMG} alt="Hero BG" />
      </HeroImg>
      <HeroContentContainer>
        <HeroArticle>
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
