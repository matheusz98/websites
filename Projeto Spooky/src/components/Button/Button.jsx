import styled from "styled-components";

export const Button = styled.button`
  font-size: 1.2rem;
  padding: 1rem 1.5rem;
  border-radius: 3rem;
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: inset 0 0 0 2rem #7923db;
  }
`;
