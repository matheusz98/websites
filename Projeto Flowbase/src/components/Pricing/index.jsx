import { pricingData } from "../../data/pricingData";
import {
  PricingSection,
  PricingContainer,
  PricingHeader,
  PricingTitle,
  PricingButtons,
  PricingButton,
  PricingContent,
  PricingCard,
  PricingType,
  PricingPrice,
  PricingFeatures,
  PricingFeaturesList,
  PricingFeaturesItem,
  StartedButton,
} from "./style";

const Pricing = () => {
  return (
    <PricingSection id="pricing">
      <PricingContainer>
        <PricingHeader>
          <PricingTitle>Get the right plan for future product.</PricingTitle>
          <PricingButtons>
            <PricingButton>Yearly</PricingButton>
            <PricingButton alt>Monthly</PricingButton>
          </PricingButtons>
        </PricingHeader>
        <PricingContent>
          {pricingData.map(({ id, type, price, features }) => (
            <PricingCard key={id}>
              <PricingType>{type}</PricingType>
              <PricingPrice>{price}</PricingPrice>
              <PricingFeatures>
                {features.map((feature, index) => (
                  <PricingFeaturesList key={index + 1}>
                    <PricingFeaturesItem>{feature}</PricingFeaturesItem>
                  </PricingFeaturesList>
                ))}
                <StartedButton>Get Started</StartedButton>
              </PricingFeatures>
            </PricingCard>
          ))}
        </PricingContent>
      </PricingContainer>
    </PricingSection>
  );
};

export default Pricing;
