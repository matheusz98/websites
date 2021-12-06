import styled from "styled-components";

export const PossibilitySection = styled.section`
  display: flex;
  padding: 4rem 6rem;

  @media (max-width: 960px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 4rem;
  }

  @media (max-width: 660px) {
    padding: 4rem 2rem;
  }
`;

export const PossibilityBg = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  margin-right: 2rem;

  @media (max-width: 960px) {
    margin: 1rem 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: 960px) {
    width: unset;
    height: unset;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const PossibilityContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;

  @media (max-width: 960px) {
    margin-top: 2rem;
  }
`;

export const Subtitle = styled.h4`
  font-size: 16px;
  color: #71e5ff;
  font-weight: 500;
  line-height: 30px;

  &:last-child {
    color: #ff8a71;
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
  margin: 1rem 0;
`;

export const Text = styled.p`
  font-size: 16px;
  color: var(--color-text);
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 2rem;
`;
