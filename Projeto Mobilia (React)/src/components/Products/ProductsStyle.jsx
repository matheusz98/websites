import styled from "styled-components";

export const ProductsSection = styled.section`
  margin: 6.25rem 0;
`;

export const ProductsContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const ProductsSectionTitle = styled.div`
  width: 100%;
  text-align: center;

  h2 {
    span {
      font-weight: 700;
      color: #ce0c4d;
    }
  }

  p {
    margin: 2rem 0;
  }
`;

export const ProductsContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 660px) {
      grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  max-width: 360px;
  box-shadow: 0px 15px 30px rgba(26, 37, 14, 0.1);
  border-radius: 5px;
  cursor: pointer;
  padding-bottom: 1.25rem;

  img {
    width: 100%;
    border-radius: 5px 5px 0 0;
    transition: 0.3s ease-in-out;

    &:hover {
       opacity: 0.8;
    }
  }

  @media (max-width: 660px) {
      max-width: 100%;
  }
`;

export const ProductsInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  h3 {
    margin: 0.625rem 0;
    font-weight: 700;
  }

  h4 {
    margin-bottom: 1rem;
    font-weight: 700;
    color: #ce0c4d;
  }
`;
