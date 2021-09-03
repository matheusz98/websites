import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #0c0c0c;
  padding: 5rem 0;

  @media (max-width: 768px) {
    height: 1100px;
  }

  @media (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 1rem;
  padding: 3.125rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1.25rem;
  }
`;

export const ServicesCard = styled.div`
  max-height: 340px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background: #ffffff;
  border-radius: 10px;
  padding: 1.875rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  width: 160px;
  height: 160px;
  margin-bottom: 0.625rem;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 4rem;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.625rem;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
