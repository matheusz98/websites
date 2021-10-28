import { Button } from "../Button/Button";
import {
  NewsletterContainer,
  Title,
  Subtitle,
  NewsletterForm,
  Input,
} from "./NewsletterStyle";

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <Title>Our Newsletter</Title>
      <Subtitle>
        Promotion new products and sales. Directly to your inbox
      </Subtitle>
      <NewsletterForm>
        <Input placeholder="Email address"/>
        <Button>Subscribe</Button>
      </NewsletterForm>
    </NewsletterContainer>
  );
};

export default Newsletter;
