import { Link } from "react-router-dom";
import {
  HeroSection,
  HeroVideo,
  HeroContainer,
  HeroTitle,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyle";
import VideoBG from "../../images/video/video.mp4";
import { Button } from "../Button/Button";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src={VideoBG} autoPlay loop muted />
      <HeroContainer>
        <HeroTitle>The best security for your data</HeroTitle>
        <HeroText>Lorem ipsum dolor sit amet.</HeroText>
        <ButtonWrapper>
          <Link to="contact">
            <Button>Get Started</Button>
          </Link>
          <Link to="pricing">
            <HeroButton>Find More</HeroButton>
          </Link>
        </ButtonWrapper>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
