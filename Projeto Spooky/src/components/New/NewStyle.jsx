import styled from "styled-components";
import { FaBroom } from "react-icons/fa";

export const NewContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4.5rem 0 2rem;

  @media (max-width: 768px) {
    padding: 7rem 0.625rem 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  color: #ffffff;
  text-align: center;
  margin: 1rem 0 3rem;
`;

export const NewContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NewContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 3rem;

  @media (max-width: 890px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const NewCard = styled.div`
  position: relative;
  background: linear-gradient(136deg, #d37e4c 0%, #df8942 100%);
  width: 260px;
  padding: 2rem 0 1.5rem 0;
  border-radius: 1rem;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    img {
      transform: translateY(-0.5rem);
    }

    svg {
      right: 0px;
    }
  }
`;

export const NewTag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #f76f20;
  border-radius: 10px;
  font-size: 1.1rem;
  color: #ffffff;
  padding: 0.4rem 0.625rem;
  font-weight: 300;
`;

export const NewImg = styled.img`
  width: 180px;
  transition: 0.3s ease-in-out;
`;

export const NewTitle = styled.h3`
  color: #ffffff;
  font-weight: 400;
`;

export const NewDescription = styled.h4`
  color: #ffffff;
  font-weight: 300;
`;

export const NewPrices = styled.div``;

export const NewPrice = styled.span`
  margin-right: 0.625rem;
  color: #ffffff;
`;

export const NewDiscountedPrice = styled.span`
  text-decoration: line-through;
  color: #e03f0d;
`;

export const NewCart = styled(FaBroom)`
  font-size: 2rem;
  position: absolute;
  bottom: 10px;
  right: -50px;
  background: #f76f20;
  color: #ffffff;
  border-radius: 10px 0 0 10px;
  transition: 0.3s ease-in-out;
`;
