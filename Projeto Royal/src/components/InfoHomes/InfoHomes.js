import { Button } from "../Button/Button";
import {
  Section,
  Container,
  ColumnLeft,
  ImageContainer,
  Arrow,
  ColumnRight,
} from "./InfoHomesStyle";

const InfoHomes = ({
  heading,
  heading2,
  buttonLabel,
  img1,
  img2,
  alt1,
  alt2,
}) => {
  return (
    <Section>
      <h2>View our newest Homes!</h2>
      <Container>
        <ColumnLeft>
          <ImageContainer>
            <img src={img1} alt={alt1} />
          </ImageContainer>
          <p>{heading}</p>
          <Button to="homes" primary="false" big="false">
            {buttonLabel}
            <Arrow />
          </Button>
        </ColumnLeft>
        <ColumnRight>
          <ImageContainer>
            <img src={img2} alt={alt2} />
          </ImageContainer>
          <p>{heading2}</p>
          <Button>
            {buttonLabel}
            <Arrow />
          </Button>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoHomes;
