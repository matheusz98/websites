import styled from "styled-components";

export const AboutSection = styled.section`
  margin: 6.25rem 0;
`;

export const AboutContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutImg = styled.div`
  order: 1;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
      transform: scale(1.02);
  }

  @media (max-width: 768px) {
    order: 2;

    img {
      margin-top: 1rem;
    }
  }

  img {
    border-radius: 5px;
  }
`;

export const AboutArticle = styled.div`
  order: 2;
  padding-left: 2rem;

  @media (max-width: 768px) {
    order: 1;
    text-align: center;
    padding-left: 0;
  }

  h2 {
    margin-bottom: 1rem;

    span {
      font-weight: 700;
      color: #ce0c4d;
    }
  }

  p {
    margin: 1rem 0;
  }
`;

export const AboutBtn = styled.div`
  margin-top: 3rem;
`;
