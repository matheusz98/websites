import styled from "styled-components";

export const DiscountsContainer = styled.section`
  max-width: 980px;
  margin: 0 auto;
  padding: 4.5rem 0 2rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 7rem 0.625rem 2rem;
  }
`;

export const DiscountsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(136deg, #d37e4c 0%, #df8942 100%);
  padding: 2.5rem 0 1.5rem;
  border-radius: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DiscountsColumn = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DiscountsImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 360px;
`;

export const DiscountsText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DiscountsTitle = styled.h3`
  font-size: 2.25rem;
  text-align: center;
  color: #ffffff;
  margin-bottom: 2rem;
`;
