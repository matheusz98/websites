import styled from "styled-components";

export const FeaturesSection = styled.section`
  position: relative;
  background: #ffffff;

  @media (min-width: 768px) {
    padding: 50px 10px;
  }
`;

export const FeaturesContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const FeaturesTitleWrapper = styled.div`
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 4rem;
`;

export const FeaturesTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  line-height: 1.06;
  letter-spacing: 1px;
  margin: 2rem auto;
`;

export const FeaturesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 4rem;
  grid-gap: 2rem;

  @media screen and (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FeaturesColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 2px #000000;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform: translate(-50%, -50%) rotate(0deg);
    z-index: -1;
    background: #ffffff;
    transition: 0.3s ease-in-out;
  }

  &:hover:before {
    width: 0%;
  }

  &:hover {
    background: #7a3ac7;

    p,
    h3 {
      transition: 0.3s ease-in-out;
      color: #ffffff;
    }
  }
`;

export const FeaturesImage = styled.div`
  margin-bottom: 1rem;
  border-radius: 50%;
  border: 2px solid #0c0c0c;
  padding: 2rem;
  transition: 0.3s ease-in-out;

  &:hover {
    background: white;
    border: 2px solid #ffffff;
  }
`;

export const FeaturesName = styled.h3`
  font-weight: 700;
  font-size: 1.2rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const FeaturesText = styled.p`
  font-size: 1rem;
  text-align: center;
  margin: 1rem 0 auto;
  line-height: 1rem;
  color: #0c0c0c;
`;
