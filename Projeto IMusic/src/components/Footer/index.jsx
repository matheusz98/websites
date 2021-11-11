import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { footerData, footerSocialData } from "../../data/footerData";
import Button from "../Button/Button";
import LogoImg from "../../assets/svg/logo.svg";
import {
  FooterSection,
  FooterContent,
  FooterText,
  FooterForm,
  FooterInput,
  FooterWrapper,
  FooterColumn,
  FooterContainer,
  FooterLine,
  FooterLogo,
  SocialIcon,
  Copyright,
  FooterRow,
  FooterSocialIcon,
} from "./style";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <FooterSection>
      <FooterContent data-aos="fade-up">
        <FooterText>
          Stay tuned with the latest updates, news and trends
        </FooterText>
        <FooterText style={{ marginBottom: "1rem" }}>
          Professional news weekly, no spam
        </FooterText>
        <FooterForm>
          <FooterInput
            name="email"
            type="email"
            placeholder="Your Email Address"
          />
          <Button>Subscribe</Button>
        </FooterForm>
      </FooterContent>
      <FooterWrapper data-aos="fade-up">
        {footerData.map((item, index) => (
          <FooterColumn key={index}>
            <FooterText>{item.title}</FooterText>
            {item.links.map((link, linkIndex) => (
              <FooterText key={linkIndex}>{link}</FooterText>
            ))}
          </FooterColumn>
        ))}
      </FooterWrapper>
      <FooterContainer>
        <FooterLine>
          <FooterLogo to="/">
            <SocialIcon src={LogoImg} alt="IMusic Logo" />
            IMusic
          </FooterLogo>
          <Copyright>
            IMusic &copy; {new Date().getFullYear()} All rights reserved.
          </Copyright>
          <FooterRow>
            {footerSocialData.map((social, index) => (
              <FooterSocialIcon
                key={index}
                href="/"
                target="_blank"
                aria-label={social.name}
              >
                {social.icon}
              </FooterSocialIcon>
            ))}
          </FooterRow>
        </FooterLine>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
