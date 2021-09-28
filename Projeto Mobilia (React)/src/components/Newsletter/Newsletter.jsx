import { useEffect } from "react";
import {
  NewsletterSection,
  NewsletterContainer,
  NewsletterTitle,
  NewsletterContent,
} from "./NewsletterStyle";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "../Button/Button";

const Newsletter = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <>
      <NewsletterSection>
        <NewsletterContainer>
          <NewsletterTitle data-aos="fade-in">
            <h2>
              Assine nossa <span>Newsletter</span>!
            </h2>
            <p>
              Se inscreva para receber novidades sobre novos produtos, descontos
              & muito mais!
            </p>
          </NewsletterTitle>

          <NewsletterContent data-aos="fade-up">
            <label for="email">Endereço de e-mail</label>
            <input type="email" placeholder="Endereço de e-mail" />
            <Button primary white >
              Inscrever
            </Button>
          </NewsletterContent>
        </NewsletterContainer>
      </NewsletterSection>
    </>
  );
};

export default Newsletter;
