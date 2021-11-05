import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 10px 0 15px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  outline: 0;
  cursor: pointer;
  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);
  transition: 0.3s ease-in-out;

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;
