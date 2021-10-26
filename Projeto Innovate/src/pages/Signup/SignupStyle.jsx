import styled from "styled-components";
import { motion } from "framer-motion";

export const FormSection = styled.section`
  background-color: #4a32b6;
  background-image: linear-gradient(45deg, #4a32b6 0%, #ff5acd 100%);
  padding: 160px 0;
`;

export const FormContainer = styled.div`
  width: 60%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 50px;

  @media (min-width: 768px) {
    padding: 0 30px;
  }
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const FormColumn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  border-radius: 20px;
  background: #341a9478;
  padding: 20px 50px;
  border: 20px;

  @media (min-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%auto;

    img {
      display: none;
    }
  }
`;

export const FormTitle = styled.h2`
  font-size: 2rem;
  color: #ffffff;
  line-height: 1.1;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

export const FormWrapper = styled.form`
  width: 50%;
  padding-top: 0;
`;

export const FormInputRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 1.5rem;

  p {
    font-size: 1rem;
    color: #ff3b3b;
    margin-top: 1rem;
  }
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 1rem;
  color: #0c0c0c;
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  display: block;
  padding: 1.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
`;

export const FormMessage = styled(motion.div)`
  color: ${({ error }) => (error ? "red" : "green")};
  background: #ffffff;
  text-align: center;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 20px;
`;

export const FormButton = styled.button`
  border-radius: 4px;
  background: none;
  margin-top: 1.5rem;
  white-space: nowrap;
  color: #fff;
  outline: none;
  width: 100%;
  font-size: 1.4rem;
  padding: 5px 15px;
  border: 2px solid black;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    color: white;
    transition: background-color 0.4s ease-in;
    background-color: black;
  }
`;
