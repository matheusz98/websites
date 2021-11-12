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
  return (
    <AboutSection id={id}>
      <AboutContainer>
        <AboutContent imgStart={imgStart}>
          <Column1>
            <AboutTextWrapper bgColor={bgColor}>
              <AboutTitle>{title}</AboutTitle>
              <AboutText>{text}</AboutText>
            </AboutTextWrapper>
          </Column1>
          <Column2>
            <Tilt
              className="Tilt"
              options={{ max: 15, scale: 1.02, speed: 200 }}
            >
              <ImgWrap bgColor={bgColor}>
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
