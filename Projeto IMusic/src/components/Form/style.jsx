import styled from "styled-components";
import { motion } from "framer-motion";

export const FormSection = styled.section`
  background: #101522;
  color: #ffffff;
  padding: 160px 0;
`;

export const FormContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const FormContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const FormColumn = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 16px;
  padding: ${({ small }) => (small ? "0 50px" : "0 15px")};
  padding: 0 15px;

  @media (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
  }

  img {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const ImgWrapper = styled(motion.div)`
  max-height: 600px;
  display: flex;
  justify-content: ${({ imgStart }) => (imgStart ? "flex-start" : "flex-end")};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Img = styled(motion.img)`
  max-width: 100%;
  max-height: 700px;
  display: inline-block;
  vertical-align: middle;
  object-fit: cover;
  padding-right: 0;
`;

export const FormTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  color: var(--orange);
  line-height: 1.1;
  margin-bottom: 24px;
`;

export const FormWrapper = styled.form`
  max-width: 540px;
  width: 100%;
  padding-top: 0;

  > button {
    width: 100%;
    height: 50px;
    background: linear-gradient(90deg, var(--orange) 0%, var(--pink) 100%);
    font-size: 1rem;
    color: #ffffff;
    margin-top: 1rem;
  }
`;

export const FormInputRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  margin-bottom: 1rem;

  > p {
    font-size: 1rem;
    color: #ff3535;
    margin-top: 1rem;
  }
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 0.3rem;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  display: block;
  padding-left: 10px;
  font-size: 1rem;
  border-radius: 10px;
`;

export const FormMessage = styled(motion.div)`
  background-color: var(--white);
  color: ${({ error }) => (error ? "red" : "green")};
  padding: 5px;
  margin-top: 1rem;
  text-align: center;
`;
