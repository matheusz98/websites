import styled from "styled-components";

export const HeroContainer = styled.section`
  height: 100%;
  min-height: 100vh;
  background: #f1e7e7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const HeroImg = styled.div`
  width: 45%;
  top: 0;
  right: 0;
  position: absolute;

  img {
    width: 100%;
    height: 100vh;
    border-radius: 5px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeroContentContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const HeroArticle = styled.article`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding-bottom: 1rem;

  h1 {
    font-size: 3.125rem;
    font-weight: 700;
    color: #0c0c0c;
    margin-bottom: 1.563rem;

    span {
      font-weight: 700;
      color: #ce0c4d;
    }

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 300;
    color: #0c0c0c;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
