import styled from "styled-components";

export const CategoriesSection = styled.section`
  padding: 80px 20px;
`;

export const CategoriesContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

export const CategoriesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  grid-gap: 56px;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CategoriesCard = styled.div`
  height: 400px;
  background: ${({ bgColor }) => (bgColor ? "var(--pink)" : "var(--beige)")};
  border-radius: 0 50% 0 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  gap: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: ${({ bgColor }) =>
      bgColor
        ? "inset 0 0 0 15rem var(--blue)"
        : "inset 0 0 0 15rem var(--main)"};
  }
`;

export const CategoriesTitle = styled.h4`
  font-size: 24px;
  font-weight: 800;
  line-height: 32px;
  color: var(--black);
`;

export const CategoriesImg = styled.img`
  object-fit: cover;
`;

export const CategoriesButton = styled.button`
  background: transparent;
  font-size: 18px;
  color: var(--black);
  line-height: 24px;
  text-align: center;
  padding: 10px 20px;
  border: 1px solid var(--black);
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
`;
