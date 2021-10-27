import styled from "styled-components";

export const CategoryContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 7rem 2rem;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  color: #ffffff;
  text-align: center;
  margin: 1rem 0 3rem;
`;

export const CategoryContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const CategoryCard = styled.div`
  flex-direction: column;
  text-align: center;
  color: #ffffffff;
  transition: 0.3s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  box-shadow: 0px calc(var(6rem) / 6) calc(var(6rem) / 3) rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  padding: 1rem;
  overflow: hidden;

  &::before {
    content: "";
    background: rgba(255, 255, 255, 0.2);
    width: 60%;
    height: 100%;
    top: 0%;
    transform: skew(45deg);
    position: absolute;
    transition: left 0.3s ease-in-out;
  }

  &::before {
    left: -125%;
  }

  &:hover {
    &::before {
      left: 150%;
    }
  }
`;

export const CardImg = styled.img`
  width: 200px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: translateY(-0.5rem);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
`;

export const CardDescription = styled.p``;
