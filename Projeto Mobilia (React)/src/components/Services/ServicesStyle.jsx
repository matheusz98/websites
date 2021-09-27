import styled from "styled-components";

export const ServicesSection = styled.section`
  margin: 6.25rem 0;
`;

export const ServicesContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const ServicesTitle = styled.div`
  width: 100%;
  text-align: center;

  h2 {
    span {
      font-weight: 700;
      color: #ce0c4d;
    }
  }

  p {
    margin: 2rem 0;
  }
`;

export const ServicesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
  border-bottom: 5px solid #ce0c4d;
  border-radius: 0.25rem 0.25rem 0 0;
  padding: 2rem 1rem;
  text-align: center;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    background: #ce0c4d;
    border-bottom: 5px solid #ffffff;

    svg,
    h3,
    p {
      color: #ffffff;
    }
  }

  svg {
    font-size: 5rem;
    color: #ce0c4d;
  }

  h3 {
    margin: 1rem 0;
    font-weight: 700;
  }
`;
