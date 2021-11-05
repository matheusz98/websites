import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--secondary);
  border-radius: 15px;
`;

export const Item = styled.div`
  padding: 10px 16px;

  & + div {
    border-top: 1px solid var(--outline);
  }

  &:first-child {
    padding-top: 14px;
  }

  &:last-child {
    padding-bottom: 18px;
  }
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
