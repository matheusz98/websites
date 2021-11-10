import styled from "styled-components";

export default styled.button`
  background: #d61eed;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  color: #ffffff;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  border-radius: 10px;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: var(--orange);
  }
`;
