import styled from "styled-components";

export const NewsletterContainer = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4.5rem 0 2rem;

  @media (max-width: 768px) {
    padding: 7rem 0.625rem 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  color: #ffffff;
  text-align: center;
  margin: 1rem 0 2rem;
`;

export const Subtitle = styled.h3`
  font-size: 1.25rem;
  color: #ffffff;
  text-align: center;
  margin: 2rem 0;
`;

export const NewsletterForm = styled.form`
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-radius: 1rem;
`;

export const Input = styled.input`
  width: 50%;
  background: rgba(255, 255, 255, 0.8);
  color: #0c0c0c;
  padding: 0 0.5rem;
  border-radius: 1rem;
  margin-right: 1rem;

  &::placeholder {
    color: #36138a;
    padding-left: 1rem;
  }
`;
