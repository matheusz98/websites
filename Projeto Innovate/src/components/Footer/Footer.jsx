import { footerData, footerSocialData } from "../../data/FooterData";
import {
  FooterSection,
  FooterContainer,
  FooterItems,
  FooterColumn,
  FooterLogo,
  Address,
  FooterRow,
  FooterSocialIcon,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  Copyright,
} from "./FooterStyle";

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterItems>
          <FooterColumn>
            <FooterLogo to="/">Innovate</FooterLogo>
            <Address>123 Random Street, Canoas - RS</Address>

            <FooterRow>
              {footerSocialData.map((item, index) => (
                <FooterSocialIcon
                  key={index}
                  href="/"
                  target="_blank"
                  aria-label={item.name}
                >
                  {item.icon}
                </FooterSocialIcon>
              ))}
            </FooterRow>
          </FooterColumn>
          {footerData.map((item, index) => (
            <FooterLinkItems key={index}>
              <FooterLinkTitle>{item.title}</FooterLinkTitle>
              {item.links.map((link, linkIndex) => (
                <FooterLink key={linkIndex} to="/">
                  {link}
                </FooterLink>
              ))}
            </FooterLinkItems>
          ))}
        </FooterItems>
        <Copyright>
          Innovate &copy; {new Date().getFullYear()} All rights reserved.
        </Copyright>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
