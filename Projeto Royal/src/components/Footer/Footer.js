import { Button } from "../Button/Button";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  Section,
  Contact,
  ContactList,
  ContactListWrapper,
  FooterLink,
  Socials,
  SocialIcons,
  SocialIconLink,
  ChatButton,
} from "./FooterStyle";

const Footer = () => {
  return (
    <Section>
      <Contact>
        <h2>Let's find your Dream House!</h2>
        <ContactList>
          <ContactListWrapper>
            <h4>Contact Us</h4>
            <FooterLink to="/">FAQ</FooterLink>
            <FooterLink to="/">Support</FooterLink>
            <FooterLink to="/">Questions</FooterLink>
          </ContactListWrapper>
          <ContactListWrapper>
            <h4>Offices</h4>
            <FooterLink to="/">United States</FooterLink>
            <FooterLink to="/">Europe</FooterLink>
            <FooterLink to="/">Brazil</FooterLink>
          </ContactListWrapper>
        </ContactList>
      </Contact>
      <Socials>
        <SocialIcons>
          <SocialIconLink href="/" target="_blank" aria-label="Facebook">
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Twitter">
            <FaTwitter />
          </SocialIconLink>
        </SocialIcons>
        <ChatButton>
          <Button>Contact Us</Button>
        </ChatButton>
      </Socials>
    </Section>
  );
};

export default Footer;
