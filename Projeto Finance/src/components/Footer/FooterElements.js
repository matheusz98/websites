import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background: #101522;
`;

export const FooterWrap = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 3rem 1.5rem;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 820px) {
    padding-top: 2rem;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  width: 160px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 1rem;
  text-align: left;
  color: #ffffff;

  @media (max-width: 420px) {
    width: 100%;
    margin: 0;
    padding: 0.625rem;
  }
`;

export const FooterLinkTitle = styled.div`
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

export const FooterLink = styled(Link)`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  color: #ffffff;

  &:hover {
    color: #01fe95;
    transition: 0.3 ease-out;
  }
`;

export const SocialMedia = styled.div`
  width: 100%;
  max-width: 1000px;
`;

export const SocialMediaWrap = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2.5rem auto 0 auto;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  display: flex;
  justify-self: start;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const WebsiteRights = styled.small`
  color: #ffffff;
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialIconLink = styled.a`
  font-size: 1.5rem;
  color: #ffffff;
`;
