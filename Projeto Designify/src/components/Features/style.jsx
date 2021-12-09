import styled from "styled-components";

export const FeaturesSection = styled.div`
  padding: 140px;
  position: relative;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 70px 0;
    margin-top: 10rem;
  }
`;

export const FeaturesContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const FeaturesTextWrapper = styled.div`
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 4rem;

  &:before {
    content: "";
    width: 40px;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 50%;
    background: var(--red);
    transform: translateX(-50%);
  }
`;

export const FeaturesTitle = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  text-align: center;
  line-height: 1.1;
  letter-spacing: 1px;
  margin: auto;
`;

export const FeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 4rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0.4rem;
    grid-row-gap: 3rem;
  }

  @media (max-width: 660px) {
    grid-template-columns: 1fr;
  }
`;

export const FeaturesColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export const FeaturesImageWrapper = styled.div`
  padding: 30px;
  margin-bottom: 1rem;
  border-radius: 50%;

  &.one {
    background: linear-gradient(130deg, #9cb3ff 0%, #b0ffe9 100%);
  }
  &.two {
    background: linear-gradient(220deg, #e7d1ff 0%, #8383ef 100%);
  }
  &.three {
    background: linear-gradient(130deg, #ff8989 0%, #ffddc5 100%);
  }
  &.four {
    background: linear-gradient(130deg, #ffa8e8 0%, #ffe6e6 100%);
  }
  &.five {
    background: linear-gradient(130deg, #ffaf73 0%, #fffecc 100%);
  }
  &.six {
    background: linear-gradient(130deg, #59dbb0 0%, #feffb5 100%);
  }
`;

export const FeaturesName = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 1.3px;

  @media (max-width: 768px) {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1px;
  }
`;

export const FeaturesText = styled.p`
  font-size: 1rem;
  color: var(--purple);
  text-align: center;
  line-height: 1.1;
  letter-spacing: 1px;
  margin: 1rem 0 auto;

  @media (max-width: 768px) {
    display: none;
  }
`;
