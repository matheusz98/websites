import styled from "styled-components";

export const TitleSection = styled.section`
  padding: 30px;
`;

export const TitleContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

export const TitleContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Img = styled.img`
  width: 30px;
`;

export const Text = styled.h3`
  font-size: 36px;
  font-weight: 700;
`;

export const Line = styled.div`
  width: 316px;
  height: 1px;
  background: var(--black);
`;
