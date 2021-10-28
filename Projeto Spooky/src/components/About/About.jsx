import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "../Button/Button";
import {
  AboutContainer,
  AboutContent,
  AboutColumn,
  AboutText,
  AboutTitle,
  AboutDescription,
  AboutImg,
  Img,
} from "./AboutStyle";

const About = ({ img, title, description }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutColumn>
          <AboutText data-aos="fade-right">
            <AboutTitle>{title}</AboutTitle>
            <AboutDescription>{description}</AboutDescription>
            <Button>Learn More</Button>
          </AboutText>
        </AboutColumn>
        <AboutColumn>
          <AboutImg data-aos="fade-left">
            <Img src={img} alt={title} />
          </AboutImg>
        </AboutColumn>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
