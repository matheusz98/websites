import {
  AboutSection,
  AboutContainer,
  AboutContent,
  AboutImg,
  AboutArticle,
  AboutBtn,
} from "./AboutStyle";
import { Button } from "../Button/Button";

const About = ({ id, paragraphOne, paragraphTwo, img, alt, buttonLabel }) => {
  return (
    <>
      <AboutSection id={id}>
        <AboutContainer>
          <AboutContent>
            <AboutImg>
              <img src={img} alt={alt} />
            </AboutImg>

            <AboutArticle>
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
