import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "../Button/Button";
import {
  NewsletterContainer,
  Title,
  Subtitle,
  NewsletterForm,
  Input,
} from "./NewsletterStyle";

const Newsletter = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <NewsletterContainer>
      <Title data-aos="fade-up">Our Newsletter</Title>
      <Subtitle data-aos="zoom-in">
        Promotion new products and sales. Directly to your inbox
      </Subtitle>
      <NewsletterForm>
        <Input placeholder="Email address" data-aos="fade-right" />
        <Button data-aos="fade-left">Subscribe</Button>
      </NewsletterForm>
    </NewsletterContainer>
  );
};

export default Newsletter;
