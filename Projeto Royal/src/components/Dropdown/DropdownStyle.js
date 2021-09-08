import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const DropdownContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? "1" : "0")};
  left: 0;
  position: fixed;
  z-index: 999;
  background: #15ab97;
  transition: 0.3s;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;

export const Icon = styled.div`
  top: 1.2rem;
  right: 1.5rem;
  position: absolute;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
  color: #0c0c0c;
`;

export const DropdownWrapper = styled.div``;

export const DropdownMenu = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  margin-bottom: 4rem;
  text-align: center;

  @media (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

export const DropdownLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #000d1a;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
