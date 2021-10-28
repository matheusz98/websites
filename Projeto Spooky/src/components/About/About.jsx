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
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutColumn>
          <AboutText>
            <AboutTitle>{title}</AboutTitle>
            <AboutDescription>{description}</AboutDescription>
            <Button>Learn More</Button>
          </AboutText>
        </AboutColumn>
        <AboutColumn>
          <AboutImg>
            <Img src={img} alt={title} />
          </AboutImg>
        </AboutColumn>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
