import {
  ContactSection,
  ContactContent,
  Text,
  Subtitle,
  ContactButton,
  Button,
} from "./style";

const Contact = () => {
  return (
    <ContactSection>
      <ContactContent>
        <Text>Request Early Access to Get Started</Text>
        <Subtitle>
          Register Today & start exploring the endless possibilities.
        </Subtitle>
      </ContactContent>
      <ContactButton>
        <Button type="button">Get Started</Button>
      </ContactButton>
    </ContactSection>
  );
};

export default Contact;
