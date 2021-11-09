import styled from "styled-components";

export const PricingSection = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 20px 0;
  overflow: hidden;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PricingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;

  @media (max-width: 870px) {
    flex-direction: column;
  }
`;

export const PricingTitle = styled.h2`
  max-width: 523px;
  font-size: 60px;
  line-height: 70px;
  letter-spacing: -1.88px;
  @media (max-width: 870px) {
    margin-bottom: 30px;
    text-align: center;
  }
`;

export const PricingButtons = styled.div`
  max-width: 346px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const PricingButton = styled.button`
  background: ${({ alt }) => (alt ? "#F7F7FB" : "var(--primary)")};
  color: ${({ alt }) => (alt ? "var(--title)" : "#ffffff")};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.5px;
  text-align: center;
  padding: 20px 50px;
  border-radius: ${({ alt }) => (alt ? "0 10px 10px 0" : "10px 0 0 10px")};
  cursor: pointer;
`;

export const PricingContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 80px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
`;

export const PricingCard = styled.div`
  max-width: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background: var(--card);
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: var(--secondary);
    transform: scale(1.12);

    p,
    h4,
    h2 {
      color: var(--card);
      transition: 0.3s ease-in-out;
    }

    button {
      background: var(--cardbuttonhover);
      color: var(--card);
      transition: 0.3s ease-in-out;
    }
  }
`;

export const PricingType = styled.h4`
  font-size: 18px;
  color: var(--text);
  font-weight: 300;
  line-height: 28px;
  letter-spacing: -0.56px;
  margin: 30px;
`;

export const PricingPrice = styled.h2`
  font-size: 50px;
  line-height: 56px;
  letter-spacing: -1.03px;
  margin-bottom: 28px;
`;

export const PricingFeatures = styled.ul`
  text-align: center;
`;

export const PricingFeaturesList = styled.li`
  font-size: 17px;
  line-height: 50px;
  letter-spacing: -0.53px;
`;

export const PricingFeaturesItem = styled.p``;

export const StartedButton = styled.button`
  font-size: 17px;
  line-height: 20px;
  letter-spacing: -0.53px;
  color: var(--primary);
  font-weight: 600;
  margin: 30px 0;
  padding: 20px 50px;
  border-radius: 10px;
  background: #eae9f2;
  background: rgb(224, 224, 224);
  background: linear-gradient(
    90deg,
    rgba(224, 224, 224, 1) 0%,
    rgba(234, 233, 242, 1) 100%
  );
  cursor: pointer;
`;
