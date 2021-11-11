import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled.section`
  width: auto;
  background: #101522;
  color: #ffffff;
  padding: 4rem 0 2rem;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 1.2rem;
  padding: 1.2rem;
`;

export const FooterText = styled.p`
  width: auto;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
`;

export const FooterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 820px) {
    width: 80%;
    flex-direction: column;
  }
`;

export const FooterInput = styled.input`
  font-size: 16px;
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 10px;
  border: 1px solid #ffffff;

  &::placeholder {
    color: #242424;
  }

  @media (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FooterWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  padding: 10px 30px;

  @media (max-width: 780px) {
    justify-content: center;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem;

  @media (max-width: 768px) {
    width: 30%;
    text-align: center;
  }
`;

export const FooterContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const FooterLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px auto 0;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLogo = styled(Link)`
  display: flex;
  justify-self: start;
  align-items: center;
  font-size: 2rem;
  font-weight: 100;
  color: #ffffff;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const SocialIcon = styled.img`
  width: 40px;
  margin-right: 10px;
`;

export const Copyright = styled.small`
  color: #ffffff;
  margin-bottom: 16px;
`;

export const FooterRow = styled.div`
  width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const FooterSocialIcon = styled.a`
  font-size: 24px;
  color: #ffffff;
`;
