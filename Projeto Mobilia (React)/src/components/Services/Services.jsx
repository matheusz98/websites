import {
  ServicesSection,
  ServicesContainer,
  ServicesTitle,
  ServicesContent,
  Item,
} from "./ServicesStyle";
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
  return (
    <>
      <ServicesSection id={id}>
        <ServicesContainer>
          <ServicesTitle>
            <h2>
              Nossos <span>serviços</span>
            </h2>
            <p>{paragraphOne}</p>
          </ServicesTitle>

          <ServicesContent>
            <Item>
              <FaShippingFast />
              <h3>{title1}</h3>
              <p>{descriptionOne}</p>
            </Item>
            <Item>
              <FaShoppingBag />
              <h3>{title2}</h3>
              <p>{descriptionTwo}</p>
            </Item>
            <Item>
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
