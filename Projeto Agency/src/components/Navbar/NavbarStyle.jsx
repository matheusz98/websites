import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.25rem;
`;

export const Left = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-weight: bold;
`;

export const Menu = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  margin-right: 1.875rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: gray;
`;

export const Button = styled.button`
  padding: 0.625rem 0.938rem;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid white;
`;
