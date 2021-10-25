import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  border-radius: 5px;
  background: transparent;
  font-size: 1.25rem;
  color: #ffffff;
  padding: 0.625rem 1.25rem;
  border: 2px solid #ffffff;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  z-index: 1;

  &:before {
    content: "";
    width: 100%;
    height: 0%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform: translate(-50%, -50%) rotate(-45deg);
    z-index: -1;
    background: #7a3ac7;
    transition: 0.3s ease-in-out;
  }

  &:hover:before {
    height: 500%;
  }

  &:hover {
    color: #ffffff;
  }
`;
