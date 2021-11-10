import styled from "styled-components";

export const PricingSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px 0 160px;
  background: #101522;
`;

export const PricingContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 768px) {
    margin: 0 30px;
  }
`;

export const PricingTitle = styled.h2`
  font-size: 3rem;
  color: var(--pink);
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 24px;
`;

export const PricingText = styled.p`
  max-width: 460px;
  font-size: 1.2rem;
  color: #ffffff;
  font-weight: 600;
  line-height: 1.3rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const PricingContent = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap;

  > div {
    margin: 0.7rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;

    > div {
      width: 90%;
    }
  }
`;

export const PricingCard = styled.div`
  max-width: 280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  border-radius: 10px;
  padding: 24px;
  margin: auto;
  transition: 0.3s ease-in-out;
  text-align: center;

  > button {
    background: transparent;
    margin-top: auto;
    border: 2px solid var(--pink);
    transition: 0.3s ease-in-out;

    &:hover {
      border: none;
    }
  }

  &:hover {
    transform: scale(1.06);
  }

  @media (max-width: 768px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardPlan = styled.h3`
  font-size: 2rem;
  color: var(--orange);
  margin-bottom: 5px;
`;

export const PricingCardCost = styled.p`
  font-size: 1.2rem;
`;

export const PricingCardText = styled.p`
  font-size: 1.1.rem;
  color: #a9b3c1;
  margin: 0.4rem 0 1.3rem;
`;

export const PricingCardFeatures = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 16px 0 32px;
  color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
  display: flex;
  font-size: 1rem;
  margin-bottom: 1rem;

  &:before {
    content: "🎧";
    margin-right: 0.4rem;
  }
`;
