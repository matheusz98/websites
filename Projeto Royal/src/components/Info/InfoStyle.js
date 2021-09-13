import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0;
  background: #15ab97;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 800px;
  padding: 3rem calc((100vw - 1300px) / 2);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const ColumnLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 1rem 2rem;
  line-height: 1.4;
  color: #ffffff;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h2 {
    font-size: clamp(1.5rem, 6vw, 2rem);
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
  }
`;

export const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }

  @media (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }
`;
