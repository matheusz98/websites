import styled from "styled-components";

export const FeaturesSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 4rem 6rem;

  @media (max-width: 990px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 4rem;
  }

  @media (max-width: 660px) {
    padding: 4rem 2rem;
  }
`;

export const FeaturesTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  margin-right: 5rem;
  text-align: left;

  @media (max-width: 990px) {
    margin: 0 0 2rem 0;
  }
`;

export const Title = styled.h2`
  font-size: 34px;
  background: var(--gradient-text);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  line-height: 45px;

  @media (max-width: 660px) {
    font-size: 28px;
    line-height: 38px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  color: var(--color-subtext);
  font-weight: 500;
  line-height: 30px;
  margin-top: 2rem;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex: 1.5;
`;
