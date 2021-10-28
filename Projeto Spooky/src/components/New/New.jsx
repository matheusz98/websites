import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { newData } from "../../data/newData";
import {
  NewContainer,
  Title,
  NewContentWrapper,
  NewContent,
  NewCard,
  NewTag,
  NewImg,
  NewTitle,
  NewDescription,
  NewPrices,
  NewPrice,
  NewDiscountedPrice,
  NewCart,
} from "./NewStyle";

const New = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <NewContainer id="new">
      <Title data-aos="fade-up">New Arrivals</Title>
      <NewContentWrapper>
        <NewContent>
          {newData.map((item, index) => (
            <NewCard key={index} data-aos="zoom-in">
              <NewTag>New</NewTag>
              <NewImg src={item.img} alt={item.title} />
              <NewTitle>{item.title}</NewTitle>
              <NewDescription>{item.description}</NewDescription>
              <NewPrices>
                <NewPrice>{item.price}</NewPrice>
                <NewDiscountedPrice>{item.discountedPrice}</NewDiscountedPrice>
              </NewPrices>
              <NewCart />
            </NewCard>
          ))}
        </NewContent>
      </NewContentWrapper>
    </NewContainer>
  );
};

export default New;
