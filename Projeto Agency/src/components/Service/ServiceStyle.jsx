import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
`;

export const Left = styled.div`
  width: 50%;
  position: relative;
`;

export const Right = styled.div`
  width: 50%;
`;

export const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 100%;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2``;

export const Desc = styled.p`
  font-size: 1.25rem;
  margin-top: 1.25rem;
  color: #555;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const Button = styled.button`
  width: 180px;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  background: darkblue;
  color: white;
  font-size: 1.25rem;
  padding: 1.25rem;
  margin-top: 50px;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

export const Video = styled.video`
  height: 300px;
  display: ${(props) => !props.open && "none"};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;
