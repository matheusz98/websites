import { featuresData } from "../../data/featuresData";
import {
  FeaturesSection,
  FeaturesContainer,
  FeaturesTextWrapper,
  FeaturesTitle,
  FeaturesWrapper,
  FeaturesColumn,
  FeaturesImageWrapper,
  FeaturesName,
  FeaturesText,
} from "./style";

const Features = () => {
  return (
    <FeaturesSection id="about">
      <FeaturesContainer>
        <FeaturesTextWrapper>
          <FeaturesTitle>What We Do</FeaturesTitle>
        </FeaturesTextWrapper>
        <FeaturesWrapper>
          {featuresData.map((item, index) => (
            <FeaturesColumn key={index}>
              <FeaturesImageWrapper className={item.imgClass}>
                {item.icon}
              </FeaturesImageWrapper>
              <FeaturesName>{item.name}</FeaturesName>
              <FeaturesText>{item.description}</FeaturesText>
            </FeaturesColumn>
          ))}
        </FeaturesWrapper>
      </FeaturesContainer>
    </FeaturesSection>
  );
};

export default Features;
