import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#0c0c0c" : "#ffffff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  background: ${({ primary }) => (primary ? "#01fe95" : "#0c0c0c")};
  white-space: nowrap;
  cursor: pointer;
  transition: 0.3 ease-in-out;

  &:hover {
    background: ${({ primary }) => (primary ? "#ffffff" : "#01fe95")};
  }
`;
