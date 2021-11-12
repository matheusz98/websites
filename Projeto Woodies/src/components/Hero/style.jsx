import styled from "styled-components";
import Bg from "../../assets/images/rectangle.png";

export const HeroSection = styled.section`
  background: url(${Bg});
  background-position: top right;
  background-size: 370px;
  background-position-y: -60px;
  background-repeat: no-repeat;
`;

export const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 120px 50px;

  @media (max-width: 768px) {
    padding: 140px 30px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeroColumn = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeroText = styled.div`
  max-width: 540px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  color: var(--title);

  @media (max-width: 768px) {
    max-width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 36px;
  line-height: 49px;
`;

export const HeroTitle = styled.h1`
  font-size: 72px;
  line-height: 100px;
  margin: 20px 0;
  font-weight: 700;
`;

export const HeroImgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
`;
