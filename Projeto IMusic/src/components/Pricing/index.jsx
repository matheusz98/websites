import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import { pricingData } from "../../data/pricingData";
import Tilt from "react-tilt";
import Button from "../Button/Button";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingContainer,
  PricingTitle,
  PricingText,
  PricingContent,
  PricingCard,
  PricingCardPlan,
  PricingCardCost,
  PricingCardText,
  PricingCardFeatures,
  PricingCardFeature,
} from "./style";

const Pricing = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: "1rem" }}>
      <PricingSection id="pricing">
        <PricingContainer>
          <PricingTitle data-aos="fade-down">
            Pick Your Best Option
          </PricingTitle>
          <PricingText data-aos="fade-down">
            Listen without limits on your phone, speaker, and other devices at
            the most suitable option for you.
          </PricingText>
          <PricingContent>
            {pricingData.map((card, index) => (
              <Tilt
                className="Tilt"
                key={index}
                options={{ max: 15, scale: 1.02, speed: 200 }}
              >
                <PricingCard key={index} data-aos="fade-up">
                  <PricingCardPlan>{card.title}</PricingCardPlan>
                  <PricingCardCost>{card.price}</PricingCardCost>
                  <PricingCardText>{card.numAcc}</PricingCardText>
                  <PricingCardFeatures>
                    {card.features.map((feature, index) => (
                      <PricingCardFeature key={index}>
                        {feature}
                      </PricingCardFeature>
                    ))}
                  </PricingCardFeatures>
                  <Button>Get Started</Button>
                </PricingCard>
              </Tilt>
            ))}
          </PricingContent>
        </PricingContainer>
      </PricingSection>
    </IconContext.Provider>
  );
};

export default Pricing;
