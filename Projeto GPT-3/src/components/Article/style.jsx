import styled from "styled-components";

export const ArticleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--color-footer);
`;

export const ArticleImage = styled.div`
  width: 100%;
  height: 100%;
  background: var(--color-bg);
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const ArticleContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem 1.5rem;
`;

export const ArticleInfo = styled.div``;

export const ArticleDate = styled.p`
  font-size: 12px;
  color: #ffffff;
  font-weight: 700;
  line-height: 35px;
`;

export const Text = styled.h3`
  font-size: 24px;
  color: #ffffff;
  font-weight: 800;
  line-height: 30px;
  margin-bottom: 5rem;
  cursor: pointer;

  @media (max-width: 660px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const Full = styled.p`
  cursor: pointer;
  color: #ffffff;
`;
