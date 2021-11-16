import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Tilt from "react-tilt";
import {
  AboutSection,
  AboutContainer,
  AboutContent,
  Column1,
  Column2,
  AboutTextWrapper,
  AboutTitle,
  AboutText,
  ImgWrap,
  Img,
} from "./style";

const About = ({ id, title, text, img, alt, bgColor, imgStart }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <AboutSection id={id}>
      <AboutContainer>
        <AboutContent imgStart={imgStart}>
          <Column1>
            <AboutTextWrapper bgColor={bgColor} data-aos="zoom-out">
              <AboutTitle>{title}</AboutTitle>
              <AboutText>{text}</AboutText>
            </AboutTextWrapper>
          </Column1>
          <Column2>
            <Tilt
              className="Tilt"
              options={{ max: 15, scale: 1.02, speed: 200 }}
            >
              <ImgWrap bgColor={bgColor} data-aos="zoom-in">
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Tilt>
          </Column2>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
