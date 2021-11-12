import HeroBg from "../../assets/images/hero.png";
import Button from "../Button/Button";
import {
  HeroSection,
  HeroContainer,
  HeroContent,
  HeroColumn,
  HeroText,
  HeroSubtitle,
  HeroTitle,
  HeroImgWrapper,
  HeroImg,
} from "./style";

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent>
          <HeroColumn>
            <HeroText>
              <HeroSubtitle>
                Are you looking for <strong>woodden furniture</strong> for your
                place?
              </HeroSubtitle>
              <HeroTitle>This is the Right Place</HeroTitle>
              <Button big>Explore Furniture</Button>
            </HeroText>
          </HeroColumn>
          <HeroColumn>
            <HeroImgWrapper>
              <HeroImg src={HeroBg} alt="Hero Image" />
            </HeroImgWrapper>
          </HeroColumn>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
