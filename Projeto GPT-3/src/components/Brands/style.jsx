import styled from "styled-components";

export const BrandsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 4rem 6rem;

  @media (max-width: 768px) {
    padding: 4rem;
  }

  @media (max-width: 660px) {
    padding: 4rem 2rem;
  }
`;

export const BrandsItem = styled.div`
  max-width: 150px;
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 1rem;
`;

export const BrandsImg = styled.img``;
