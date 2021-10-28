import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  FooterSection,
  FooterContainer,
  FooterContent,
  FooterLogo,
  FooterIcon,
  FooterDescription,
  FooterSocialMedia,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  FooterTitle,
  FooterLinks,
  FooterLinkItem,
  FooterLink,
  Copyright,
  FooterImageOne,
  FooterImageTwo,
} from "./FooterStyle";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <FooterSection>
      <FooterContainer>
        <FooterContent>
          <FooterLogo data-aos="fade-up">
            <FooterIcon src="./assets/images/favicon.png" alt="Logo" />
            SPOOKY
          </FooterLogo>
          <FooterDescription data-aos="fade-up">
            Enjoy the scariest night of your life.
          </FooterDescription>
          <FooterSocialMedia>
            <FacebookIcon data-aos="fade-up" />
            <InstagramIcon data-aos="fade-up" />
            <TwitterIcon data-aos="fade-up" />
          </FooterSocialMedia>
        </FooterContent>

        <FooterContent data-aos="fade-up">
          <FooterTitle>About</FooterTitle>
          <FooterLinks>
            <FooterLinkItem>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Features</FooterLink>
              <FooterLink>News</FooterLink>
            </FooterLinkItem>
          </FooterLinks>
        </FooterContent>

        <FooterContent data-aos="fade-up">
          <FooterTitle>Our Services</FooterTitle>
          <FooterLinks>
            <FooterLinkItem>
              <FooterLink>Pricing</FooterLink>
              <FooterLink>Discounts</FooterLink>
              <FooterLink>Shipping</FooterLink>
            </FooterLinkItem>
          </FooterLinks>
        </FooterContent>

        <FooterContent data-aos="fade-up">
          <FooterTitle>Our Company</FooterTitle>
          <FooterLinks>
            <FooterLinkItem>
              <FooterLink>Blog</FooterLink>
              <FooterLink>About us</FooterLink>
              <FooterLink>Our mission</FooterLink>
            </FooterLinkItem>
          </FooterLinks>
        </FooterContent>
      </FooterContainer>

      <Copyright data-aos="zoom-in">
        Cinerama &copy; {new Date().getFullYear()} All rights reserved.
      </Copyright>

      <FooterImageOne
        src="./assets/images/footer1-img.png"
        alt="Footer Image"
        data-aos="fade-left"
      />
      <FooterImageTwo
        src="./assets/images/footer2-img.png"
        alt="Footer Image"
        data-aos="fade-right"
      />
    </FooterSection>
  );
};

export default Footer;
