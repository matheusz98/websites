import LogoImg from "../../assets/svg/logo.svg";
import {
  FooterSection,
  FooterContainer,
  FooterContent,
  FooterLogo,
  FooterIcon,
  FooterInfo,
  FooterInfoItem,
  FooterTitle,
  FooterLinks,
  FooterLinkItem,
  FooterLink,
  Copyright,
} from "./style";

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterContent>
          <FooterLogo>
            <FooterIcon src={LogoImg} alt="Woodies Logo" />
          </FooterLogo>
          <FooterInfo>
            <FooterInfoItem>(012) 8967453</FooterInfoItem>
            <FooterInfoItem>woodies@gmail.com</FooterInfoItem>
            <FooterInfoItem>Jakarta, Indonesia</FooterInfoItem>
          </FooterInfo>
        </FooterContent>

        <FooterContent>
          <FooterTitle>Product</FooterTitle>
          <FooterLinks>
            <FooterLinkItem>
              <FooterLink>Furnitures</FooterLink>
              <FooterLink>Packages</FooterLink>
              <FooterLink>Services</FooterLink>
            </FooterLinkItem>
          </FooterLinks>
        </FooterContent>

        <FooterContent>
          <FooterTitle>Resources</FooterTitle>
          <FooterLinks>
            <FooterLinkItem>
              <FooterLink>Blog</FooterLink>
              <FooterLink>FAQs</FooterLink>
              <FooterLink>Contact Us</FooterLink>
            </FooterLinkItem>
          </FooterLinks>
        </FooterContent>

        <FooterContent>
          <FooterTitle>Company</FooterTitle>
          <FooterLinks>
            <FooterLinkItem>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Jobs</FooterLink>
              <FooterLink>Our Team</FooterLink>
            </FooterLinkItem>
          </FooterLinks>
        </FooterContent>

        <FooterContent>
          <FooterTitle>Follow Us</FooterTitle>
          <FooterLinks>
            <FooterLinkItem>
              <FooterLink>Facebook</FooterLink>
              <FooterLink>Instagram</FooterLink>
              <FooterLink>Twitter</FooterLink>
            </FooterLinkItem>
          </FooterLinks>
        </FooterContent>
      </FooterContainer>

      <Copyright>&copy; {new Date().getFullYear()} WOODIES</Copyright>
    </FooterSection>
  );
};

export default Footer;
