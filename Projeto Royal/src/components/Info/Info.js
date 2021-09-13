import { Button } from "../Button/Button";
import { Section, Container, ColumnLeft, ColumnRight } from "./InfoStyle";

const Info = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
  alt,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h2>{heading}</h2>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/homes" primary="true">{buttonLabel}</Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt={alt} />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Info;
