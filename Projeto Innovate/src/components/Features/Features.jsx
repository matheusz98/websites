import { featuresData } from "../../data/FeaturesData";
import {
  FeaturesSection,
  FeaturesContainer,
  FeaturesTitleWrapper,
  FeaturesTitle,
  FeaturesContent,
  FeaturesColumn,
  FeaturesImage,
  FeaturesName,
  FeaturesText,
} from "./FeaturesStyle";

const Features = () => {
  return (
    <FeaturesSection>
      <FeaturesContainer>
        <FeaturesTitleWrapper>
          <FeaturesTitle>Services we offer</FeaturesTitle>
        </FeaturesTitleWrapper>
        <FeaturesContent>
          {featuresData.map((item, index) => (
            <FeaturesColumn key={index}>
              <FeaturesImage>{item.icon}</FeaturesImage>
              <FeaturesName>{item.name}</FeaturesName>
              <FeaturesText>{item.description}</FeaturesText>
            </FeaturesColumn>
          ))}
        </FeaturesContent>
      </FeaturesContainer>
    </FeaturesSection>
  );
};

export default Features;
