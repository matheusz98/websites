import styled from "styled-components";

export const HeroContainer = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 20px 0;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const HeroColumn = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeroText = styled.div`
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

export const HeroTitle = styled.h1`
  font-size: 5rem;
  line-height: 4.813rem;
  letter-spacing: -2.5px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.25rem;
  line-height: 30px;
  letter-spacing: -0.63px;
  margin: 30px 0 50px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const Arrow = styled.img`
  background: #ffffff;
  border-radius: 50%;
  border: 1px solid #e7e7e7;
  cursor: pointer;
`;

export const HeroImage = styled.div`
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
  width: 560px;
`;
