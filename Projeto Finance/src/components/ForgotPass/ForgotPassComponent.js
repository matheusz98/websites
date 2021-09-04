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
} from "../Signin/SigninElements";

const ForgotPassComponent = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">finance</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Forgot your password?</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormButton type="submit">Reset password</FormButton>
              <PageLink to="/signin">Sign In</PageLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default ForgotPassComponent;
