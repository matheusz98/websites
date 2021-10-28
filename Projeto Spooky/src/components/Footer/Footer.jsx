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
  return (
    <FooterSection>
      <FooterContainer>
        <FooterContent>
          <FooterLogo>
            <FooterIcon src="./assets/images/favicon.png" alt="Logo" />
            SPOOKY
          </FooterLogo>
          <FooterDescription>
            Enjoy the scariest night of your life.
          </FooterDescription>
          <FooterSocialMedia>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </FooterSocialMedia>
        </FooterContent>

        <FooterContent>
          <FooterTitle>About</FooterTitle>
          <FooterLinks>
            <FooterLinkItem>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Features</FooterLink>
              <FooterLink>News</FooterLink>
            </FooterLinkItem>
          </FooterLinks>
        </FooterContent>

        <FooterContent>
          <FooterTitle>Our Services</FooterTitle>
          <FooterLinks>
            <FooterLinkItem>
              <FooterLink>Pricing</FooterLink>
              <FooterLink>Discounts</FooterLink>
              <FooterLink>Shipping</FooterLink>
            </FooterLinkItem>
          </FooterLinks>
        </FooterContent>

        <FooterContent>
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

      <Copyright>
        Cinerama &copy; {new Date().getFullYear()} All rights reserved.
      </Copyright>

      <FooterImageOne
        src="./assets/images/footer1-img.png"
        alt="Footer Image"
      />
      <FooterImageTwo
        src="./assets/images/footer2-img.png"
        alt="Footer Image"
      />
    </FooterSection>
  );
};

export default Footer;
