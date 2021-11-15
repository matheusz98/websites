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
  return (
    <HowSection id="how">
      <HowContainer>
        <HowContent>
          {howData.map((item, index) => (
            <HowItem key={index}>
              <HowImg src={item.img} alt={item.alt} />
              <HowTitle>{item.title}</HowTitle>
            </HowItem>
          ))}
        </HowContent>
        <ButtonContainer>
          <Button big>Get Personalized Now</Button>
        </ButtonContainer>
      </HowContainer>
    </HowSection>
  );
};

export default How;
