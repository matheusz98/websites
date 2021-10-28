import { Button } from "../Button/Button";
import {
  DiscountsContainer,
  DiscountsContent,
  DiscountsColumn,
  DiscountsImg,
  Img,
  DiscountsText,
  DiscountsTitle,
} from "./DiscountsStyle";

const Discounts = ({ img, title }) => {
  return (
    <DiscountsContainer>
      <DiscountsContent>
        <DiscountsColumn>
          <DiscountsImg>
            <Img src={img} alt={title} />
          </DiscountsImg>
        </DiscountsColumn>
        <DiscountsColumn>
          <DiscountsText>
            <DiscountsTitle>{title}</DiscountsTitle>
            <Button>Go to New</Button>
          </DiscountsText>
        </DiscountsColumn>
      </DiscountsContent>
    </DiscountsContainer>
  );
};

export default Discounts;
