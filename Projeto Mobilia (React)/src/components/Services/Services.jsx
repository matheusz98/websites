import { useEffect } from "react";
import {
  ServicesSection,
  ServicesContainer,
  ServicesTitle,
  ServicesContent,
  Item,
} from "./ServicesStyle";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaShippingFast, FaShoppingBag, FaCouch } from "react-icons/fa";

const Services = ({
  id,
  paragraphOne,
  title1,
  title2,
  title3,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
}) => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <>
      <ServicesSection id={id}>
        <ServicesContainer>
          <ServicesTitle data-aos="fade-up">
            <h2>
              Nossos <span>serviços</span>
            </h2>
            <p>{paragraphOne}</p>
          </ServicesTitle>

          <ServicesContent>
            <Item data-aos="fade-up">
              <FaShippingFast />
              <h3>{title1}</h3>
              <p>{descriptionOne}</p>
            </Item>
            <Item data-aos="fade-down">
              <FaShoppingBag />
              <h3>{title2}</h3>
              <p>{descriptionTwo}</p>
            </Item>
            <Item data-aos="fade-up">
              <FaCouch />
              <h3>{title3}</h3>
              <p>{descriptionThree}</p>
            </Item>
          </ServicesContent>
        </ServicesContainer>
      </ServicesSection>
    </>
  );
};

export default Services;
