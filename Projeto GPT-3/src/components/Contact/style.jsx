import styled from "styled-components";

export const ContactSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--gradient-bar);
  margin: 4rem;
  padding: 2rem;
  border-radius: 1rem;

  @media (max-width: 660px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    margin: 4rem 2rem;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #ffffff;
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 30px;
`;

export const Subtitle = styled.h3`
  font-size: 24px;
  font-weight: 800;
  line-height: 45px;

  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 32px;
  }
`;

export const ContactButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;

  @media (max-width: 660px) {
    margin: 2rem 0 0;
  }
`;

export const Button = styled.button`
  min-width: 150px;
  background: #0c0c0c;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 28px;
  }
`;
