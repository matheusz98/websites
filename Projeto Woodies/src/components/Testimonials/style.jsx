import styled from "styled-components";

export const TestimonialsSection = styled.section`
  padding: 80px 20px;
`;

export const TestimonialsContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

export const TestimonialsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TestimonialsColumn = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TestimonialsImages = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const TestimonialsImg = styled.img`
  border-radius: 30% 0 30% 0;
  padding: 20px 0;
  cursor: pointer;
`;

export const TestimonialsCard = styled.div`
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  border: 1px solid #a8dcec;
  box-sizing: border-box;
  border-radius: 0 30% 0 30%;
  padding: 3rem 2rem;
`;

export const TestimonialsRating = styled.div`
  margin-top: 30px;
`;

export const TestimonialsStars = styled.img``;

export const TestimonialsDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TestimonialsDescription = styled.p`
  font-size: 14px;
  line-height: 19px;
  color: var(--black);
  font-weight: 600;
  margin: 20px 0;
`;

export const TestimonialsPerson = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;

export const TestimonialsPersonDetails = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: #afafaf;
`;
