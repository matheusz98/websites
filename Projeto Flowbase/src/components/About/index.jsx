import {
  AboutSection,
  AboutContainer,
  AboutContent,
  Column1,
  TextWrapper,
  AboutTitle,
  AboutText,
  AboutLink,
  Column2,
  ImgWrapper,
  AboutImg,
} from "./style";

const About = ({ img, alt, imgStart, title, text, link }) => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutContent imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <AboutTitle>{title}</AboutTitle>
              <AboutText>{text}</AboutText>
              <AboutLink>{link}</AboutLink>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <AboutImg src={img} alt={alt} />
            </ImgWrapper>
          </Column2>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
