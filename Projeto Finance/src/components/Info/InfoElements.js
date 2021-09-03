import styled from "styled-components";

export const InfoContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 6.25rem 0;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 860px;
  display: grid;
  justify-content: center;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1.5rem;
`;

export const InfoRow = styled.div`
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
  margin-bottom: 0.938rem;
  padding: 0 0.938rem;
`;

export const Column2 = styled.div`
  grid-area: col2;
  margin-bottom: 0.938rem;
  padding: 0 0.938rem;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 3.75rem;
`;

export const TopLine = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #01fe95;
  line-height: 1rem;
  letter-spacing: 1.4px;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  line-height: 1.1;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: ${({ darkText }) => (darkText ? "#010606" : "#ffffff")};
  margin-bottom: 2.188rem;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 0.625rem 0;
  padding-right: 0;
`;
