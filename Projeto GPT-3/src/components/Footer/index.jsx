import LogoImg from "../../assets/images/logo.svg";
import {
  FooterSection,
  FooterTitle,
  Title,
  FooterButton,
  Button,
  FooterLinks,
  FooterLogo,
  Logo,
  FooterAddress,
  FooterLinksContent,
  FooterLinksTitle,
  FooterLinkItem,
  FooterCopyright,
  Copyright,
} from "./style";

const Footer = () => {
  return (
    <FooterSection>
      <FooterTitle>
        <Title>Do you want to step in to the future before others</Title>
      </FooterTitle>

      <FooterButton>
        <Button>Request Early Access</Button>
      </FooterButton>

      <FooterLinks>
        <FooterLogo>
          <Logo src={LogoImg} alt="GPT-3 Logo" />
          <FooterAddress>
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </FooterAddress>
        </FooterLogo>

        <FooterLinksContent>
          <FooterLinksTitle>Links</FooterLinksTitle>
          <FooterLinkItem>Overruns</FooterLinkItem>
          <FooterLinkItem>Social Media</FooterLinkItem>
          <FooterLinkItem>Counters</FooterLinkItem>
          <FooterLinkItem>Contact</FooterLinkItem>
        </FooterLinksContent>

        <FooterLinksContent>
          <FooterLinksTitle>Company</FooterLinksTitle>
          <FooterLinkItem>Terms & Conditions</FooterLinkItem>
          <FooterLinkItem>Privacy Policy</FooterLinkItem>
          <FooterLinkItem>Contact</FooterLinkItem>
        </FooterLinksContent>

        <FooterLinksContent>
          <FooterLinksTitle>Get in Touch</FooterLinksTitle>
          <FooterLinkItem>Crechterwoord K12 182 DK Alknjkcb</FooterLinkItem>
          <FooterLinkItem>085-132567</FooterLinkItem>
          <FooterLinkItem>info@payme.net</FooterLinkItem>
        </FooterLinksContent>
      </FooterLinks>

      <FooterCopyright>
        <Copyright>@2021 GPT-3. All rights reserved.</Copyright>
      </FooterCopyright>
    </FooterSection>
  );
};

export default Footer;
