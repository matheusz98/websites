import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { howData } from "../../data/howData";
import Button from "../Button/Button";
import {
  HowSection,
  HowContainer,
  HowContent,
  HowItem,
  HowImg,
  HowTitle,
  ButtonContainer,
} from "./style";

const How = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <HowSection id="how">
      <HowContainer>
        <HowContent>
          {howData.map((item, index) => (
            <HowItem key={index} data-aos="zoom-in">
              <HowImg src={item.img} alt={item.alt} />
              <HowTitle>{item.title}</HowTitle>
            </HowItem>
          ))}
        </HowContent>
        <ButtonContainer data-aos="fade-up">
          <Button big>Get Personalized Now</Button>
        </ButtonContainer>
      </HowContainer>
    </HowSection>
  );
};

export default How;
