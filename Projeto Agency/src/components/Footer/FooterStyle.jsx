import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: #111;
  color: lightgray;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  @media (min-width: 768px) {
    padding: 10px;
  }
`;

export const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-right: 20px;
  @media (min-width: 768px) {
    margin-right: 10px;
    font-size: 14px;
  }
`;

export const Copyright = styled.span`
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
