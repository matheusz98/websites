import { useEffect } from "react";
import {
  AboutSection,
  AboutContainer,
  AboutContent,
  AboutImg,
  AboutArticle,
  AboutBtn,
} from "./AboutStyle";
import { Button } from "../Button/Button";
import Aos from "aos";
import "aos/dist/aos.css";

const About = ({ id, paragraphOne, paragraphTwo, img, alt, buttonLabel }) => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  
  return (
    <>
      <AboutSection id={id}>
        <AboutContainer>
          <AboutContent>
            <AboutImg data-aos="fade-right">
              <img src={img} alt={alt} />
            </AboutImg>

            <AboutArticle data-aos="fade-left">
              <h2>
                Sobre a <span>M</span>obilia<span>.</span>
              </h2>
              <p>{paragraphOne}</p>
              <p>{paragraphTwo}</p>
              <AboutBtn>
                <Button primary white big>
                  {buttonLabel}
                </Button>
              </AboutBtn>
            </AboutArticle>
          </AboutContent>
        </AboutContainer>
      </AboutSection>
    </>
  );
};

export default About;
