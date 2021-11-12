import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 70px 0;
  }
`;

export const AboutContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const AboutContent = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  align-items: center;
  gap: 5rem;

  @media (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  margin-bottom: 1rem;
  padding: 0 1rem;
`;

export const Column2 = styled.div`
  grid-area: col2;
  margin-bottom: 1rem;
  padding: 0 1rem;
`;

export const AboutTextWrapper = styled.div`
  max-width: ${({ bgColor }) => (bgColor ? "448px" : "648px")};
  padding-top: 0 0 3.75rem;
  color: var(--black);
  margin: 0 auto;
`;

export const AboutTitle = styled.h2`
  font-size: 36px;
  line-height: 49, 1px;
`;

export const AboutText = styled.p`
  font-size: 24px;
  line-height: 32, 74px;
`;

export const ImgWrap = styled.div`
  max-width: ${({ bgColor }) => (bgColor ? "560px" : "287px")};
  background: ${({ bgColor }) => (bgColor ? "var(--beige)" : "var(--blue)")};
  border-radius: 0 50px 0 50px;
  margin: 0 auto;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${({ bgColor }) => (bgColor ? "var(--blue)" : "var(--beige)")};
  }
`;

export const Img = styled.img`
  margin: 0 0 0.625rem 0;
  padding-right: 0;
`;
