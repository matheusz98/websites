import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 1rem;

  @media (max-width: 660px) {
    margin: 1rem 0;
  }
`;

export const ContentTitle = styled.div`
  max-width: 180px;
  flex: 1;
  margin-right: 2rem;
`;

export const Bar = styled.div`
  width: 38px;
  height: 3px;
  background: var(--gradient-bar);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 0.25rem;
`;

export const Title = styled.h3`
  font-size: 18px;
  color: #ffffff;
  line-height: 24px;
  letter-spacing: 1px;
  font-weight: 800;

  @media (max-width: 660px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const ContentText = styled.div`
  max-width: 390px;
  display: flex;
  flex: 2;
`;

export const Text = styled.p`
  font-size: 14px;
  color: var(--color-text);
  font-weight: 500;
  line-height: 24px;

  @media (max-width: 660px) {
    font-size: 12px;
    line-height: 20px;
  }
`;
