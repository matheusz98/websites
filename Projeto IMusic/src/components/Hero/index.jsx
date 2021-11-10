import { Link } from "react-router-dom";
import { AiOutlinePlayCircle } from "react-icons/ai";
import {
  HeroSection,
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroText,
  ButtonContainer,
} from "./style";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContainer>
        <HeroContent>
          <HeroTitle>Every Creative Music</HeroTitle>
          <HeroText>
            Discover, stream and share a constantly expanding mix of music from
            emerging and major artists around the world
          </HeroText>
          <ButtonContainer>
            <Link to={"/sign-up"}>
              <Button big fontBig>
                Get Started
              </Button>
            </Link>
            <Button big fontBig>
              <AiOutlinePlayCircle size="2.3rem" /> Download
            </Button>
          </ButtonContainer>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
