import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  max-width: 200px;
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ big }) => (big ? "1rem" : "0.875rem")};
  background: ${({ primary }) => (primary ? "#010912" : "#15ab97")};
  color: ${({ primary }) => (primary ? "#ffffff" : "#010912")};
  padding: ${({ big }) => (big ? "1rem 2.5rem" : "1rem 1.5rem")};
  white-space: nowrap;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
      transform: translateY(-2px);
  }
`;
