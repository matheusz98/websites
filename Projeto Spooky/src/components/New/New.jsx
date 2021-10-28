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
  return (
    <NewContainer id="new">
      <Title>New Arrivals</Title>
      <NewContentWrapper>
        <NewContent>
          {newData.map((item, index) => (
            <NewCard key={index}>
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
