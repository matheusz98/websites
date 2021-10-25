import styled from "styled-components";
import { Button } from "../Button/Button";

export const HeroSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 220px);
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%);
`;

export const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;

  object-fit: cover;
  z-index: -1;
`;

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const HeroTitle = styled.h1`
  width: 100%;
  text-align: center;
  letter-spacing: 1px;
  font-size: 3.5rem;
  margin-bottom: 2rem;
  color: #ffffff;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HeroText = styled.p`
  font-size: 1.5rem;
  text-align: center;
  letter-spacing: 1px;
  color: #ffffff;
  margin-bottom: 2.5rem;
  line-height: 1.25rem;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;

export const HeroButton = styled(Button)`
  color: #0c0c0c;
  z-index: 1;

  &:before {
    background: #e7e7e7;
    height: 300%;
  }

  &:hover:before {
    height: 0%;
  }

  &:hover {
    color: #aa63ff;
  }
`;
