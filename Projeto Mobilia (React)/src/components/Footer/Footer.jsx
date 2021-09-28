import {
  FooterContainer,
  FooterWrapper,
  FooterLinkContainer,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  Copyright,
  SocialIcons,
  SocialIconLink,
} from "./FooterStyle";
import LogoAlt from "../Logo/LogoAlt";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre a Mobilia</FooterLinkTitle>
              <FooterLink to="/">Sobre nós</FooterLink>
              <FooterLink to="/">Avaliações</FooterLink>
              <FooterLink to="/">Oportunidades</FooterLink>
              <FooterLink to="/">Investidores</FooterLink>
              <FooterLink to="/">Termos de serviço</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Entre em contato</FooterLinkTitle>
              <FooterLink to="/">Contato</FooterLink>
              <FooterLink to="/">Suporte</FooterLink>
              <FooterLink to="/">Entregas</FooterLink>
              <FooterLink to="/">Patrocínios</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Mídias Sociais</FooterLinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>

        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo>
              <LogoAlt />
            </SocialLogo>
            <Copyright>
              Mobilia. &copy; {new Date().getFullYear()} Todos os direitos
              reservados.
            </Copyright>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" arial-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" arial-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" arial-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
