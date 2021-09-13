import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.div`
  width: 100%;
  background: #147887;
  padding: 8rem 7rem;

  @media (max-width: 768px) {
    padding: 4rem 3rem;
  }
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  margin-bottom: 4.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  h2 {
    width: 65%;
    font-size: 4.5rem;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 2rem;
      text-align: center;
      margin-bottom: 2rem;
    }
  }
`;

export const ContactList = styled.div`
  display: flex;
`;

export const ContactListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;

  &:last-child {
    margin-left: 4rem;

    @media (max-width: 768px) {
      margin-left: 6rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  h4 {
    font-weight: 600;
    margin: 0.5rem 0;
    padding-top: 0.5rem;
  }
`;

export const FooterLink = styled(Link)`
  color: #ffffff;
  margin: 0.5rem 0;
  transition: 0.5s;

  &:hover {
    color: #0c0c0c;
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 10%;
  }
`;

export const SocialIcons = styled.div`
  color: #ffffff;
`;

export const SocialIconLink = styled.a`
  font-size: 2rem;
  color: #ffffff;
  margin-right: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
`;

export const ChatButton = styled.div``;
