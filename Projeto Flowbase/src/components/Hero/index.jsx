import {
  HeroContainer,
  HeroContent,
  HeroColumn,
  HeroText,
  HeroTitle,
  HeroDescription,
  Buttons,
  Arrow,
  HeroImage,
  Img,
} from "./style";
import Button from "../Button/Button";
import HeroImg from "../../assets/images/hero.png";
import ArrowDown from "../../assets/svg/arrow-down.svg";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroColumn>
          <HeroText>
            <HeroTitle>Grow your subscription business</HeroTitle>
            <HeroDescription>
              Outcome-centered products that reduce churn, optimize pricing, and
              grow your subscription business end-to-end.
            </HeroDescription>
            <Buttons>
              <Button>Get Started</Button>
              <Arrow src={ArrowDown} alt="Arrow Down" />
            </Buttons>
          </HeroText>
        </HeroColumn>
        <HeroColumn>
          <HeroImage>
            <Img src={HeroImg} alt="Hero Image" />
          </HeroImage>
        </HeroColumn>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
