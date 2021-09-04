import styled from "styled-components";
import { Link as LogoLink } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  position: fixed;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(LogoLink)`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-left: 2rem;
  margin-right: 2rem;

  @media (max-width: 480px) {
    margin-top: 0.5rem;
    margin-left: 1rem;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 5rem;

  @media (max-width: 480px) {
    padding: 0.625rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  height: auto;
  display: grid;
  z-index: 1;
  margin: 0 auto;
  padding: 5rem 2rem;
  background: #0c0c0c;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media (max-width: 400px) {
    padding: 2rem 2rem;
  }
`;

export const FormH1 = styled.h1`
  font-size: 1.25rem;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  margin-bottom: 2.5rem;
`;

export const FormLabel = styled.label`
  font-size: 0.875rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  padding: 1rem 1rem;
  margin-bottom: 2rem;
  border-radius: 5px;
`;

export const FormButton = styled.button`
  background: #01fe95;
  font-size: 1.5rem;
  color: #ffffff;
  padding: 1rem 0;
  border-radius: 5px;
  cursor: pointer;
`;

export const PageLink = styled(RouterLink)`
  font-size: 0.875rem;
  color: #ffffff;
  margin-top: 1.5rem;
  text-align: center;
`;
