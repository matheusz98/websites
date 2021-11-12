import styled from "styled-components";

export default styled.button`
  background: ${({ alt }) => (alt ? "transparent" : "var(--black)")};
  color: ${({ alt }) => (alt ? "var(--black)" : "#ffffff")};
  border: 1px solid ${({ alt }) => (alt ? "var(--black)" : "none")};
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  padding: 10px 40px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: ${({ alt }) => (alt ? "inset 0 0 0 2em var(--main)" : "")};
    color: ${({ alt }) => (alt ? "#ffffff" : "")};
    border: ${({ alt }) => (alt ? "1px solid #ffffff" : "")};
    font-weight: ${({ alt }) => (alt ? "300" : "")};
  }
`;
