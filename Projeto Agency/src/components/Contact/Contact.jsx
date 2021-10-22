import {
  Container,
  Wrapper,
  FormContainer,
  Title,
  Form,
  LeftForm,
  RightForm,
  Input,
  TextArea,
  Button,
  AddressContainer,
  AddressItem,
  Icon,
  Text,
} from "./ContactStyle";
import Map from "../../images/map.png";
import Phone from "../../images/phone.png";
import Send from "../../images/send.png";

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>123 Random Street., Canoas, RS</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+1 123 456 789</Text>
            <Text>+1 123 456 789</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>contact@agency.com</Text>
            <Text>contact@agency.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
