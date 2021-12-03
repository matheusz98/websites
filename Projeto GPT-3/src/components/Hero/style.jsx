import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  padding: 4rem 6rem;

  @media (max-width: 1060px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 4rem;
  }

  @media (max-width: 660px) {
    padding: 4rem 2rem;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  margin-right: 5rem;

  @media (max-width: 1060px) {
    margin: 0 0 3rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 60px;
  background: var(--gradient-text);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  line-height: 75px;
  letter-spacing: -0.04rem;

  @media (max-width: 660px) {
    font-size: 48px;
    line-height: 60px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
    line-height: 48px;
  }
`;

export const HeroDescription = styled.p`
  font-size: 20px;
  color: var(--color-text);
  font-weight: 400;
  line-height: 28px;
  margin-top: 1.5rem;

  @media (max-width: 660px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const HeroContentForm = styled.div`
  width: 100%;
  display: flex;
  margin: 2rem 0 1rem;

  button {
    flex: 0.6;
    width: 100%;
    min-height: 50px;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    background: #ff4820;
    border: 2px solid #ff4820;
    padding: 0 1rem;
    color: #fff;
    cursor: pointer;
    outline: none;

    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    @media (max-width: 660px) {
      font-size: 16px;
      line-height: 24px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

export const HeroInput = styled.input`
  width: 100%;
  min-height: 50px;
  flex: 2;
  font-size: 20px;
  color: #ffffff;
  font-weight: 400;
  line-height: 28px;
  background: var(--color-footer);
  border: 2px solid var(--color-footer);
  padding: 0 1rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  @media (max-width: 660px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const HeroContentPeople = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

export const HeroImg = styled.img`
  width: 180px;
  height: 38px;
`;

export const HeroContentPeopleDescription = styled.p`
  font-size: 12px;
  color: #ffffff;
  font-weight: 500;
  line-height: 38px;
  text-align: center;
  margin: 0 0 0 1rem;

  @media (max-width: 660px) {
    margin: 0;
  }
`;

export const HeroBg = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const HeroAiBg = styled.img`
  width: 100%;
  height: 100%;
`;
