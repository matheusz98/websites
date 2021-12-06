import styled from "styled-components";

export const FooterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--color-footer);
  padding: 4rem 6rem;

  @media (max-width: 768px) {
    padding: 4rem;
  }

  @media (max-width: 660px) {
    padding: 4rem 2rem;
  }
`;

export const FooterTitle = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 64px;
  background: var(--gradient-text);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  line-height: 75px;

  @media (max-width: 860px) {
    font-size: 44px;
    line-height: 50px;
  }

  @media (max-width: 660px) {
    font-size: 34px;
    line-height: 42px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 38px;
  }
`;

export const FooterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ffffff;
  margin-bottom: 10rem;
  text-align: center;
  cursor: pointer;
`;

export const Button = styled.p`
  font-size: 18px;
  color: #ffffff;
  line-height: 21px;
  word-spacing: 2px;

  @media (max-width: 660px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const FooterLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  text-align: center;

  div {
    width: 250px;
    margin: 1rem;

    @media (max-width: 660px) {
      margin: 1rem 0;
    }
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 120px;
  height: 30px;
  margin-bottom: 1rem;
`;

export const FooterAddress = styled.p`
  font-size: 12px;
  color: #ffffff;
  line-height: 15px;
  text-align: left;
`;

export const FooterLinksContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const FooterLinksTitle = styled.h4`
  font-size: 14px;
  color: #ffffff;
  line-height: 18px;
  margin-bottom: 1rem;
`;

export const FooterLinkItem = styled.p`
  font-size: 12px;
  color: #ffffff;
  line-height: 16px;
  margin: 0.5rem 0;
  cursor: pointer;
`;

export const FooterCopyright = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 2rem;
`;

export const Copyright = styled.p`
  font-size: 12px;
  color: #ffffff;
  line-height: 16px;
`;
