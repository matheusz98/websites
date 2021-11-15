import Woodies from "../../assets/svg/icon.svg";
import {
  TitleSection,
  TitleContainer,
  TitleContent,
  Img,
  Text,
  Line,
} from "./style";

const Title = ({ text }) => {
  return (
    <TitleSection>
      <TitleContainer>
        <TitleContent>
          <Img src={Woodies} alt="Woodies Icon" />
          <Text>{text}</Text>
          <Line />
        </TitleContent>
      </TitleContainer>
    </TitleSection>
  );
};

export default Title;
