import styled from "styled-components";

export const ClientsSection = styled.section`
  padding: 140px 0;
  position: relative;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 70px 0;
    margin-top: 10rem;
  }
`;

export const ClientsContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const ClientsTextWrapper = styled.div`
  padding: 0 0 20px;
  position: relative;
  margin-bottom: 4rem;

  &:before {
    content: "";
    width: 40px;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 50%;
    background: var(--red);
    transform: translateX(-50%);
  }
`;

export const ClientsTitle = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  text-align: center;
  line-height: 1.1;
  letter-spacing: 1px;
`;

export const ClientsText = styled.p`
  font-size: 1.3rem;
  color: var(--purple);
  text-align: center;
  line-height: 1.1;
  letter-spacing: 1px;
  margin: 1rem 0 auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ClientsRow = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ClientsColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin: 0.4rem;

  @media (max-width: 960px) {
    div:not(:first-child) {
      display: none;
    }
  }
`;

export const ClientsWrapper = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--lightgray);
  box-shadow: 0 0 32px 8px #dfdfdf;
  padding: 10px 40px;
  border-radius: 1rem;
  margin: 0.4rem;
`;

export const ClientsImage = styled.img`
  width: 90px;

  @media (max-width: 960px) {
    width: clamp(80px, 40vw, 400px);
    height: 60%;
  }
`;
