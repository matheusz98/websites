import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  PageLink,
} from "./SigninElements";

const SigninComponent = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">finance</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Enter</FormButton>
              <PageLink to="/forgotpass">Forgot your password?</PageLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SigninComponent;
