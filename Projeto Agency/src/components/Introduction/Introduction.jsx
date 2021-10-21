import {
  Container,
  Left,
  Right,
  Title,
  Desc,
  Info,
  Button,
  Contact,
  Phone,
  ContactText,
  Image,
} from "./IntroductionStyle";
import ImageOne from "../../images/01.png";
import AnimatedShapes from "../AnimatedShapes/AnimatedShapes";

const Introduction = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </Desc>
        <Info>
          <Button>Start a Project</Button>
          <Contact>
            <Phone>Call us (012) 345 - 6789</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={ImageOne} alt="Image One"></Image>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Introduction;
