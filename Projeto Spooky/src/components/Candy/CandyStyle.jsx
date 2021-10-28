import styled from "styled-components";
import { FaBroom } from "react-icons/fa";

export const CandyContainer = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 7rem 2rem;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  color: #ffffff;
  text-align: center;
  margin: 1rem 0 5rem;
`;

export const CandyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const CandyContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CandyCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background: rgb(170, 43, 29);
  background: linear-gradient(
    90deg,
    rgba(170, 43, 29, 0.8) 0%,
    rgba(204, 86, 30, 0.5) 100%
  );
  color: #ffffff;
  text-align: center;
  padding: 3rem;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    img {
      transform: translateY(-0.5rem);
    }

    svg {
      right: 0px;
    }
  }
`;

export const CandyImg = styled.img`
  width: 100px;
  transition: 0.3s ease-in-out;
`;

export const CandyTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 0.65rem;
`;

export const CandyDescription = styled.h4`
  font-size: 1.1rem;
  font-weight: 300;
  margin-bottom: 0.65rem;
`;

export const CandyPrice = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.65rem;
`;

export const CandyCart = styled(FaBroom)`
  font-size: 2rem;
  position: absolute;
  bottom: 10px;
  right: -50px;
  background: #f76f20;
  border-radius: 10px 0 0 10px;
  transition: 0.3s ease-in-out;
`;
