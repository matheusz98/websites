import styled from "styled-components";

export const PricingSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 160px 0;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #4e15d3 100%
  );
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

export const PricingHeading = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  text-align: center;
  letter-spacing: 1px;
  line-height: 1.06;
  color: #ffffff;
`;

export const PricingText = styled.span`
  font-size: 1.1rem;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  margin: 2rem 0;
`;

export const PricingContent = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  margin: 0.7rem;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    flex-direction: column;
  }
`;

export const PricingCard = styled.div`
  margin: 2rem auto;
  text-align: center;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const PricingCardInfo = styled.div`
  max-width: 360px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  margin: auto;
  padding: 2rem;
  color: #ffffff;
  background: #5d3391;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:before {
    content: "";
    width: 100%;
    height: 0%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform: translate(-50%, -50%) rotate(0deg);
    z-index: -1;
    background: #7a3ac7;
    transition: 0.3s ease-in-out;
  }

  &:hover:before {
    height: 60%;
  }

  &:hover {
    background: #dbdbdb;
    color: #0c0c0c;

    button {
      color: #0c0c0c;
      border: 2px solid #0c0c0c;
    }
  }

  button {
    margin-top: auto;
    transition: 0.3s ease-in-out;

    &:hover {
      color: #ffffff;
    }
  }

  @media (min-width: 768px) {
    width: 90%;
  }
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 2rem;
`;

export const PricingCardCost = styled.h4`
  font-size: 1.2rem;
`;

export const PricingCardText = styled.p`
  font-size: 1.1rem;
  color: #ffffff;
  margin: 0.5rem 0 1.5rem;
`;

export const PricingCardFeatures = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #0c0c0c;
  margin: 1.25rem 0 2rem;
`;

export const PricingCardFeature = styled.li`
  display: flex;
  margin-bottom: 1rem;
  font-size: 1rem;

  &:before {
    content: "🎧";
    margin-right: 0.5rem;
  }
`;
