import {
  Container,
  Left,
  Right,
  Image,
  Title,
  SubTitle,
  Desc,
  Button,
} from "./FeatureStyle";
import ImgTwo from "../../images/02.png";
import AnimatedShapes from "../AnimatedShapes/AnimatedShapes";

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={ImgTwo} />
      </Left>
      <Right>
        <Title>
          <b>Good Design</b>
          <br />
          <b>Good Business</b>
        </Title>
        <SubTitle>We know that good design means good business.</SubTitle>
        <Desc>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that comunicate clearly, achieving
          marketing gloals, and look fantastic.
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
