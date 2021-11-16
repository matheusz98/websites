import styled from "styled-components";
import FooterBG from "../../assets/images/footer.png";

export const FooterSection = styled.footer`
  position: relative;
  padding: 100px 0 20px;
  overflow: hidden;
  text-align: center;
  background: var(--footer);
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  margin: 0 auto;
  background: url(${FooterBG});
  background-size: 560px;
  background-position: bottom right;
  background-repeat: no-repeat;

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
  gap: 10px;
  margin-bottom: 20px;
`;

export const FooterIcon = styled.img`
  width: 190px;
`;

export const FooterInfo = styled.ul``;

export const FooterInfoItem = styled.li`
  margin: 20px 0;
  font-size: 14px;
  line-height: 19px;
  color: #8d8d8d;
  font-weight: 400;
`;

export const FooterTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  line-height: 24px;
  margin-bottom: 10px;
`;

export const FooterLinks = styled.ul``;

export const FooterLinkItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const FooterLink = styled.a`
  font-size: 14px;
  line-height: 19px;
  font-weight: 400;
  color: #8d8d8d;
  margin: 10px 0;
`;

export const Copyright = styled.small`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: #8d8d8d;
  line-height: 16px;
`;
