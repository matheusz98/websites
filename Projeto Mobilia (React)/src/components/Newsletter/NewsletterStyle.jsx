import styled from "styled-components";

export const NewsletterSection = styled.section`
  margin: 6.25rem 0;
`;

export const NewsletterContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const NewsletterTitle = styled.div`
  width: 100%;
  text-align: center;

  h2 {
    span {
      font-weight: 700;
      color: #ce0c4d;
    }
  }

  p {
    margin: 2rem 0;
  }
`;

export const NewsletterContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 3.125rem auto 0;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }

  label {
    width: 1px;
    height: 1px;
    position: absolute;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip-path: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  input {
    width: 20.625rem;
    height: 3.125rem;
    padding: 0 1.563rem;
    background: #ffffff;
    border: 0px;
    border-radius: 5px;
    font-size: 0.938rem;
    color: #ce0c4d;

    &::placeholder {
      color: #ce0c4d;
    }
  }
`;
