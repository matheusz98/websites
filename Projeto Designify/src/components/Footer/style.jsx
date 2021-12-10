import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to bottom right, #c04de2, #340c7f);
  padding: 4rem 0 2rem 0;
`;

export const FooterSubscription = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: var(--white);
`;

export const SocialLogo = styled(Link)`
  display: flex;
  justify-self: start;
  align-items: center;
  font-size: 2rem;
  color: var(--white);
  margin-bottom: 16px;
  cursor: pointer;
`;

export const SocialIcon = styled.img`
  width: 40px;
  margin-right: 0.2rem;
`;

export const FooterSubheading = styled.p`
  font-size: 24px;
  margin-bottom: 24px;
`;

export const SocialMedia = styled.div`
  width: 100%;
  max-width: 1100px;
`;

export const SocialMediaWrap = styled.div`
  max-width: 1100px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px auto 0 auto;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const Copyright = styled.small`
  color: var(--white);
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialIconLink = styled.a`
  font-size: 24px;
  color: var(--white);
`;
