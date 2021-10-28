import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <DiscountsContainer>
      <DiscountsContent data-aos="fade-up">
        <DiscountsColumn>
          <DiscountsImg>
            <Img src={img} alt={title} data-aos="fade-right" />
          </DiscountsImg>
        </DiscountsColumn>
        <DiscountsColumn>
          <DiscountsText>
            <DiscountsTitle data-aos="fade-left">{title}</DiscountsTitle>
            <Button data-aos="fade-left">Go to New</Button>
          </DiscountsText>
        </DiscountsColumn>
      </DiscountsContent>
    </DiscountsContainer>
  );
};

export default Discounts;
