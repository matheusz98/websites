import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#ce0c4d" : "#0c0c0c")};
  font-size: ${({ bigFontSize }) => (bigFontSize ? "1.25rem" : "1rem")};
  color: ${({ white }) => (white ? "#ffffff" : "#0c0c0c")};
  padding: ${({ big }) => (big ? "1rem 2.5rem" : "0.875rem 1.875rem")};
  text-transform: ${({ uppercase }) =>
    uppercase ? "uppercase" : "capitalize"};
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: ${({ primary }) => (primary ? "transparent" : "#c0c0c0")};
    color: ${({ primary }) => (primary ? "#ce0c4d" : "#ffffff")};
    border: ${({ primary }) => (primary ? "1px solid #ce0c4d" : "none")};
  }
`;
