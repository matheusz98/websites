import { featuresData } from "../../data/featuresData";
import {
  FeaturesSection,
  FeaturesContainer,
  FeaturesCard,
  FeaturesImg,
  FeaturesTitle,
  FeaturesDescription,
} from "./style";

const Features = () => {
  return (
    <FeaturesSection id="features">
      <FeaturesContainer>
        {featuresData.map((item, index) => (
          <FeaturesCard key={index}>
            <FeaturesImg src={item.img} alt={item.alt} />
            <FeaturesTitle>{item.title}</FeaturesTitle>
            <FeaturesDescription>{item.description}</FeaturesDescription>
          </FeaturesCard>
        ))}
      </FeaturesContainer>
    </FeaturesSection>
  );
};

export default Features;
