import { featuresData } from "../../data/featuresData";
import Content from "../Content";
import {
  FeaturesSection,
  FeaturesTitle,
  Title,
  Text,
  FeaturesContainer,
} from "./style";

const Features = () => {
  return (
    <FeaturesSection id="features">
      <FeaturesTitle>
        <Title>
          The Future is Now and You Just Need to Realize It. Step into Future
          Today. & Make it Happen.
        </Title>
        <Text>Request Early Access to Get Started</Text>
      </FeaturesTitle>
      <FeaturesContainer>
        {featuresData.map((item, index) => (
          <Content
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </FeaturesContainer>
    </FeaturesSection>
  );
};

export default Features;
