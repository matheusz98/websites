import styled from "styled-components";

export default styled.button`
  background: ${({ alt }) => (alt ? "var(--secondary)" : "var(--primary)")};
  color: #ffffff;
  font-size: 1.125rem;
  text-align: center;
  padding: 1.25rem 3.75rem;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
