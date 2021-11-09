import styled from "styled-components";

export const AboutSection = styled.section``;

export const AboutContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 20px 0;
  overflow: hidden;
`;

export const AboutContent = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  grid-area: col1;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
`;

export const Column2 = styled.div`
  grid-area: col2;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding: 0 0 3.75rem;
`;

export const AboutTitle = styled.h2`
  font-size: 3.125rem;
  line-height: 57px;
  letter-spacing: -1.56px;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const AboutText = styled.p`
  max-width: 440px;
  font-size: 1.25rem;
  line-height: 30px;
  letter-spacing: -0.63px;
  margin: 30px 0;
`;

export const AboutLink = styled.a`
  font-size: 1.125rem;
  color: var(--primary);
  line-height: 20px;
  letter-spacing: -0.53px;
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  max-width: 540px;
`;

export const AboutImg = styled.img``;
