import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { ImTwitter } from "react-icons/im";

export const FooterSection = styled.section`
  position: relative;
  padding: 4.5rem 0 2rem;
  overflow: hidden;
  color: #ffffff;
  text-align: center;

  @media (max-width: 768px) {
    padding: 7rem 0.625rem 2rem;
  }
`;

export const FooterContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  margin-bottom: 1rem;
  font-weight: 300;
  color: #ffffff;
`;

export const FooterIcon = styled.img`
  width: 20px;
`;

export const FooterDescription = styled.p`
  margin-bottom: 1.25rem;
`;

export const FooterSocialMedia = styled.div``;

export const FacebookIcon = styled(FaFacebookF)`
  display: inline-flex;
  background: linear-gradient(136deg, #d37e4c 0%, #df8942 100%);
  padding: 0.25rem;
  border-radius: 0.25rem;
  color: #ffffff;
  font-size: 2rem;
`;

export const InstagramIcon = styled(AiFillInstagram)`
  display: inline-flex;
  background: linear-gradient(136deg, #d37e4c 0%, #df8942 100%);
  padding: 0.25rem;
  border-radius: 0.25rem;
  color: #ffffff;
  font-size: 2rem;
  margin: 0 1rem;
`;

export const TwitterIcon = styled(ImTwitter)`
  display: inline-flex;
  background: linear-gradient(136deg, #d37e4c 0%, #df8942 100%);
  padding: 0.25rem;
  border-radius: 0.25rem;
  color: #ffffff;
  font-size: 2rem;
`;

export const FooterTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const FooterLinks = styled.ul`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterLinkItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FooterLink = styled.a`
  font-weight: 300;
  cursor: pointer;
`;

export const Copyright = styled.span`
  display: block;
  text-align: center;
  font-size: 1.1rem;
  margin-top: 4.5rem;
`;

export const FooterImageOne = styled.img`
  width: 150px;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: -1;
`;

export const FooterImageTwo = styled.img`
  width: 200px;
  left: 0;
  bottom: 0;
  position: absolute;
  z-index: -1;

  @media (max-width: 560px) {
    left: 0;
    top: 150px;
  }
`;
