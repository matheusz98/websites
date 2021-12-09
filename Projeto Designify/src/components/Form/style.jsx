import styled from "styled-components";
import { motion } from "framer-motion";

export const FormSection = styled.div`
  width: 100%;
  padding: clamp(50px, 30vh, 100px) 0;
  border-radius: 30px;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -15px -15px -15px;
`;

export const FormColumn = styled.div`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 16px;
  margin-bottom: 16px;

  img {
    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    max-width: 100% !important;
    justify-content: center;
    align-items: center;
    flex-basis: 100%;
  }
`;

export const FormTitle = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 4rem;
`;

export const FormWrapper = styled.form`
  width: 100%;
  max-width: 540px;
  padding-top: 0;
`;

export const FormInputRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  margin-bottom: 2rem;

  > p {
    font-size: 1rem;
    color: var(--red);
    margin-top: 0.5rem;
  }
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 1rem;
  color: var(--gray);
  margin-bottom: 0.3rem;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  display: block;
  font-size: 1rem;
  padding-left: 10px;
  border-radius: 5px;
  border-bottom: 1px solid var(--lightgray);
`;

export const FormButton = styled.button`
  width: 100%;
  height: 4rem;
  background: var(--red);
  font-size: 12px;
  color: var(--white);
  font-weight: 700;
  text-align: center;
  line-height: 30px;
  letter-spacing: 1px;
  margin-top: 2rem;
  border-radius: 30px;
  box-shadow: 10px 16px 40px 0 rgba(255, 84, 117 / 46%);
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #f06e88;
  }
`;

export const FormMessage = styled(motion.div)`
  color: ${({ error }) => (error ? "red" : "green")};
  text-align: center;
  margin-top: 1rem;
  padding: 10px;
`;
