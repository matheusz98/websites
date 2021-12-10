import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import LogoImg from "../../assets/images/logo.svg";
import {
  FooterContainer,
  FooterSubscription,
  SocialLogo,
  SocialIcon,
  FooterSubheading,
  SocialMedia,
  SocialMediaWrap,
  Copyright,
  SocialIcons,
  SocialIconLink,
} from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <SocialLogo to="/">
          <SocialIcon src={LogoImg} alt="Designify Logo" />
          esignify
        </SocialLogo>
        <FooterSubheading>Interested in working with us?</FooterSubheading>
      </FooterSubscription>

      <SocialMedia>
        <SocialMediaWrap>
          <Copyright>
            Designify &copy; {new Date().getFullYear()} All rights reserved.
          </Copyright>
          <SocialIcons>
            <SocialIconLink href="/" target="blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
