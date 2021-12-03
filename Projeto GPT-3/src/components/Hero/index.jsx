import PeopleImg from "../../assets/images/people.png";
import AiImg from "../../assets/images/ai.png";
import Button from "../Button/Button";
import {
  HeroSection,
  HeroContainer,
  HeroTitle,
  HeroDescription,
  HeroContentForm,
  HeroInput,
  HeroContentPeople,
  HeroImg,
  HeroContentPeopleDescription,
  HeroBg,
  HeroAiBg,
} from "./style";

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroTitle>
          Let&apos;s Build Something amazing with GPT-3 OpenAI
        </HeroTitle>
        <HeroDescription>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </HeroDescription>

        <HeroContentForm>
          <HeroInput type="email" placeholder="Your Email Address" />
          <Button type="button">Get Started</Button>
        </HeroContentForm>

        <HeroContentPeople>
          <HeroImg src={PeopleImg} alt="Users" />
          <HeroContentPeopleDescription>
            1,600 people requested access a visit in last 24 hours
          </HeroContentPeopleDescription>
        </HeroContentPeople>
      </HeroContainer>

      <HeroBg>
        <HeroAiBg src={AiImg} alt="Artificial Intelligence" />
      </HeroBg>
    </HeroSection>
  );
};

export default Hero;
