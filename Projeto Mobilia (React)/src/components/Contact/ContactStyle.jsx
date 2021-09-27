import styled from "styled-components";
import ContactBG from "../../images/contact.jpg";

export const ContactSection = styled.section`
  margin: 6.25rem 0;
`;

export const ContactContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const ContactBox = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactImg = styled.div`
  height: 100%;
  background: url(${ContactBG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 880px) {
    height: 200px;
  }
`;

export const ContactForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.563rem 2.5rem;

  h2 {
    position: relative;
    padding: 0 0 0.625rem;
    margin-bottom: 1.25rem;

    span {
      font-weight: 700;
      color: #ce0c4d;
    }

    &:after {
      content: "";
      width: 3.125rem;
      height: 0.313rem;
      bottom: 0;
      left: 50%;
      position: absolute;
      background: #ce0c4d;
      border-radius: 3px;
      transform: translateX(-50%);
    }
  }

  label {
    width: 1px;
    height: 1px;
    position: absolute;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip-path: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  input {
    width: 100%;
    padding: 1rem 1rem;
    font-size: 1rem;
    margin-bottom: 1.25rem;
    background: #f1e7e7;
    border: 2px solid #0c0c0c;
    outline: none;
    transition: all 0.5s ease-in-out;

    &:hover {
      background: #ffffff;
    }

    &:focus {
      background: #ffffff;
      border: 2px solid #ce0c4d;
    }
  }

  textarea {
    min-height: 9.375rem;
    resize: none;

    width: 100%;
    padding: 1rem 1rem;
    font-size: 1rem;
    margin-bottom: 1.25rem;
    background: #f1e7e7;
    border: 2px solid #0c0c0c;
    outline: none;
    transition: all 0.5s ease-in-out;

    &:hover {
      background: #ffffff;
    }

    &:focus {
      background: #ffffff;
      border: 2px solid #ce0c4d;
    }
  }
`;
