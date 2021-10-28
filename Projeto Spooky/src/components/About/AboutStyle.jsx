import styled from "styled-components";

export const AboutContainer = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4.5rem 0 2rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 7rem 0.625rem 2rem;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutColumn = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const AboutTitle = styled.h2`
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
`;

export const AboutDescription = styled.p`
  color: #ffffff;
  margin-bottom: 2rem;
`;

export const AboutImg = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
`;

export const Img = styled.img`
  width: 360px;
`;
