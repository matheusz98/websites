import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Left = styled.div`
  width: 50%;
`;

export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 80%;
  margin-top: 2rem;
`;

export const Title = styled.span`
  font-size: 4.375rem;
`;

export const SubTitle = styled.span`
  font-size: 1.5rem;
  font-style: italic;
  color: #333;
`;

export const Desc = styled.p`
  font-size: 1.25rem;
  color: #777;
  margin-top: 1.875rem;
`;

export const Button = styled.button`
  width: 150px;
  padding: 0.938rem 1.25rem;
  background: darkblue;
  color: white;
  font-size: 1.25rem;
  margin-top: 1.25rem;
  border-radius: 20px;
  cursor: pointer;
`;
