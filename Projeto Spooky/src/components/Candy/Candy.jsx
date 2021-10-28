import { candyData } from "../../data/candyData";
import {
  CandyContainer,
  Title,
  CandyWrapper,
  CandyContent,
  CandyCard,
  CandyImg,
  CandyTitle,
  CandyDescription,
  CandyPrice,
  CandyCart,
} from "./CandyStyle";

const Candy = () => {
  return (
    <CandyContainer id="candy">
      <Title>Trick Or Treat</Title>
      <CandyWrapper>
        {candyData.map((item, index) => (
          <CandyContent key={index}>
            <CandyCard>
              <CandyImg src={item.img} alt={item.title} />
              <CandyTitle>{item.title}</CandyTitle>
              <CandyDescription>{item.description}</CandyDescription>
              <CandyPrice>{item.price}</CandyPrice>
              <CandyCart />
            </CandyCard>
          </CandyContent>
        ))}
      </CandyWrapper>
    </CandyContainer>
  );
};

export default Candy;
