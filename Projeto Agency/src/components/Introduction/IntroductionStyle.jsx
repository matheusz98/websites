import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 1.25rem;
`;

export const Left = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Right = styled.div`
  width: 40%;
`;

export const Title = styled.h2`
  width: 60%;
  font-size: 3.75rem;
`;

export const Desc = styled.p`
  width: 60%;
  font-size: 1.25rem;
`;

export const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.125rem;
`;

export const Button = styled.button`
  padding: 0.938rem;
  background: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

export const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

export const Image = styled.img`
  width: 100%;
`;
