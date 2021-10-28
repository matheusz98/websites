import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <CandyContainer id="candy">
      <Title data-aos="fade-up">Trick Or Treat</Title>
      <CandyWrapper>
        {candyData.map((item, index) => (
          <CandyContent key={index}>
            <CandyCard data-aos="zoom-in">
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
