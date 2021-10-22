import styled from "styled-components";

export const Container = styled.div`
  height: 90%;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  margin: 50px;
  margin-top: 0;
  @media (max-width: 768px) {
    margin: 20px;
  }
`;

export const Form = styled.form`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftForm = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-right: 1.25rem;
  @media (max-width: 768px) {
    height: 50%;
    margin-right: 0;
  }
`;

export const RightForm = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    height: 50%;
  }
`;

export const Input = styled.input`
  width: 200px;
  padding: 1.25rem;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 1.25rem;
  @media (max-width: 768px) {
    padding: 5px;
    margin-top: 20px;
  }
`;

export const Button = styled.button`
  font-size: 1.125rem;
  color: white;
  background: darkblue;
  padding: 15px;
  border-radius: 10px;
  margin-top: 1.25rem;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 5px;
  }
`;

export const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 15px;
  }
`;

export const Text = styled.span`
  font-size: 1.25rem;
  margin-right: 15px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
