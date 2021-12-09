import { useState } from "react";
import validateForm from "./validateForm";
import {
  FormSection,
  FormContainer,
  FormRow,
  FormColumn,
  FormTitle,
  FormWrapper,
  FormInputRow,
  FormLabel,
  FormInput,
  FormButton,
  FormMessage,
} from "./style";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateForm({ name, email, subject, message });

    if (resultError !== null) {
      setError(resultError);
      return;
    }

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setSuccess("Message was sent!");
    setError(null);
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
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
      label: "Subject",
      value: subject,
      onChange: (e) => setSubject(e.target.value),
    },
    {
      label: "Message",
      value: message,
      onChange: (e) => setMessage(e.target.value),
    },
  ];

  return (
    <FormSection>
      <FormContainer>
        <FormRow>
          <FormColumn>
            <FormTitle>Sign Up</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {formData.map((item, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{item.label} *</FormLabel>
                  <FormInput
                    type={item.type}
                    value={item.value}
                    onChange={item.onChange}
                  />
                </FormInputRow>
              ))}
              <FormButton type="submit">Let's talk</FormButton>
            </FormWrapper>
            {error && (
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
        </FormRow>
      </FormContainer>
    </FormSection>
  );
};

export default Form;
