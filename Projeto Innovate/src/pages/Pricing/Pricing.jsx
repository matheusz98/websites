import { pricingData } from "../../data/PricingData";
import {
  PricingSection,
  PricingContainer,
  PricingHeading,
  PricingText,
  PricingContent,
  PricingCard,
  PricingCardInfo,
  PricingCardPlan,
  PricingCardCost,
  PricingCardText,
  PricingCardFeatures,
  PricingCardFeature,
} from "./PricingStyle";
import { IconContext } from "react-icons/lib";
import { Button } from "../../components/Button/Button";

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: "#ffffff", size: "1rem" }}>
      <PricingSection>
        <PricingContainer>
          <PricingHeading>Pick Your Best Option</PricingHeading>
          <PricingText>
            Create, maintain and store your data with Innovate.
          </PricingText>
          <PricingContent>
            {pricingData.map((card, index) => (
              <PricingCard key={index}>
                <PricingCardInfo>
                  <PricingCardPlan>{card.title}</PricingCardPlan>
                  <PricingCardCost>{card.price}</PricingCardCost>
                  <PricingCardText>{card.description}</PricingCardText>
                  <PricingCardFeatures>
                    {card.features.map((feature, index) => (
                      <PricingCardFeature key={index}>
                        {feature}
                      </PricingCardFeature>
                    ))}
                  </PricingCardFeatures>
                  <Button>Get Started</Button>
                </PricingCardInfo>
              </PricingCard>
            ))}
          </PricingContent>
        </PricingContainer>
      </PricingSection>
    </IconContext.Provider>
  );
};

export default Pricing;
