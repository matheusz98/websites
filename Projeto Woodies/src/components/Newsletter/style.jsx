import styled from "styled-components";

export const NewsletterSection = styled.section`
  padding: 100px 20px;
`;

export const NewsletterContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

export const NewsletterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NewsletterTitle = styled.p`
  max-width: 493px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color: var(--black);

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

export const NewsletterInput = styled.input`
  width: 60%;
  font-size: 16px;
  padding: 15px 30px;
  border-radius: 10px 0 0 10px;
  border: 1px solid var(--main);

  &::placeholder {
    color: #afafaf;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NewsletterButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  color: var(--white);
  line-height: 21px;
  text-align: center;
  padding: 15px 30px;
  background: var(--main);
  border-radius: 0 10px 10px 0;
  cursor: pointer;
`;
