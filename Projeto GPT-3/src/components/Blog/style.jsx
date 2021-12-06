import styled from "styled-components";

export const BlogSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem 6rem;

  @media (max-width: 768px) {
    padding: 4rem;
  }

  @media (max-width: 660px) {
    padding: 4rem 2rem;
  }
`;

export const BlogTitle = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  text-align: left;
`;

export const Title = styled.h2`
  font-size: 62px;
  background: var(--gradient-text);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  line-height: 74px;

  @media (max-width: 960px) {
    font-size: 46px;
    line-height: 52px;
  }

  @media (max-width: 768px) {
    font-size: 34px;
    line-height: 42px;
  }
`;

export const BlogContainer = styled.div`
  display: flex;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
  }
`;

export const BlogContainerA = styled.div`
  flex: 0.75;
  margin-right: 2rem;

  @media (max-width: 960px) {
    margin: 2rem 0;

    div {
      width: 48%;

      img {
        height: 250px;
      }
    }
  }

  @media (max-width: 768px) {
    div {
      width: 100%;
    }
  }
`;

export const BlogContainerB = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  flex: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
