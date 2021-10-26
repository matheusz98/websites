import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled.section`
  background: rgb(58, 14, 111);
  background: linear-gradient(
    90deg,
    rgba(58, 14, 111, 1) 0%,
    rgba(118, 30, 224, 1) 100%
  );
  padding: 4rem 0 2rem 0;
`;

export const FooterContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const FooterItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: space-between;
  align-items: center;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const FooterLogo = styled(Link)`
  display: flex;
  justify-self: start;
  align-items: center;
  font-size: 2rem;
  font-style: italic;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 1.25rem;
`;

export const Address = styled.div`
  max-width: 20rem;
  font-size: 1rem;
  color: #ffffff;
  margin: 0.5rem auto;
  text-align: center;
  line-height: 2;
  font-weight: 500;
`;

export const FooterRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: auto 0;
  gap: 1rem;

  @media (max-width: 768px) {
    div {
      width: 20%;
    }

    > div:first-child {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const FooterSocialIcon = styled.a`
  font-size: 2rem;
  color: #ffffff;
`;

export const FooterLinkItems = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
  text-align: left;
  color: #ffffff;
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 1rem;
`;

export const FooterLink = styled(Link)`
  color: #ffffff;
  margin-bottom: 1rem;
`;

export const Copyright = styled.div`
  width: 100%;
  font-size: 1rem;
  color: #ffffff;
  text-align: center;
  border-top: 1px solid #ffffff;
  padding: 1rem 0;
  margin: 1rem 0 1.25rem 0;
`;
