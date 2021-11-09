import styled from "styled-components";

export const FeaturesSection = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 20px 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 1rem;
  padding: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const FeaturesCard = styled.div`
  max-width: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const FeaturesImg = styled.img``;

export const FeaturesTitle = styled.h3`
  font-size: 24px;
  margin: 10px 0 20px;
`;

export const FeaturesDescription = styled.p`
  font-size: 16px;
`;
