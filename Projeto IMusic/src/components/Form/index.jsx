import { useState } from "react";
import validateForm from "./validateForm";
import MusicSvg from "../../assets/svg/music.svg";
import Button from "../Button/Button";
import {
  FormSection,
  FormContainer,
  FormContent,
  FormColumn,
  ImgWrapper,
  Img,
  FormTitle,
  FormWrapper,
  FormInputRow,
  FormLabel,
  FormInput,
  FormMessage,
} from "./style";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateForm({ name, email, password, confirmPass });

    if (resultError !== null) {
      setError(resultError);
      return;
    }

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPass("");
    setError(null);
    setSuccess("Your application was submitted! o/");
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
  };

  const formData = [
    {
      label: "Name",
      value: name,
      onChange: (e) => setName(e.target.value),
      type: "text",
    },
    {
      label: "Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: "email",
    },
    {
      label: "Password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      type: "password",
    },
    {
      label: "Confirm Password",
      value: confirmPass,
      onChange: (e) => setConfirmPass(e.target.value),
      type: "password",
    },
  ];

  return (
    <FormSection>
      <FormContainer>
        <FormContent>
          <FormColumn>
            <ImgWrapper>
              <Img src={MusicSvg} alt="Music" />
            </ImgWrapper>
          </FormColumn>
          <FormColumn small>
            <FormTitle>Sign Up</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {formData.map((item, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{item.label}</FormLabel>
                  <FormInput
                    type={item.type}
                    value={item.value}
                    onChange={item.onChange}
                    placeholder={`Enter your ${item.label.toLocaleLowerCase()}`}
                  />
                </FormInputRow>
              ))}
              <Button type="submit">Signup</Button>
            </FormWrapper>
            {error &
            (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {error}
              </FormMessage>
            )}
            {success && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormContent>
      </FormContainer>
    </FormSection>
  );
};

export default Form;
