import styled from "styled-components";
import HeroImg from "../../assets/images/hero2.jpg";

export const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)),
    url(${HeroImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;

  @media (max-width: 768px) {
    padding-top: 120px;
  }
`;

export const HeroContainer = styled.div`
  max-width: 1100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  overflow: hidden;
  margin: 0 auto;
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeroTitle = styled.h1`
  width: 100%;
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  color: #ffffff;
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 2rem;
`;

export const HeroText = styled.p`
  max-width: 560px;
  font-size: clamp(1rem, 3vw, 1.3rem);
  color: #ffffff;
  margin: 0 0 2rem;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap;

  button {
    background-color: transparent;
    margin: 0 0.3rem;
  }

  button:nth-child(1) {
    border: 2px solid var(--orange);

    &:hover {
      border: 2px solid transparent;
    }
  }

  button:nth-child(2) {
    padding: 8px 32px;

    display: flex;
    align-items: center;

    &:hover {
      background-color: transparent;
      color: var(--orange);
    }
    > svg {
      margin-right: 0.4rem;
    }
  }
`;
