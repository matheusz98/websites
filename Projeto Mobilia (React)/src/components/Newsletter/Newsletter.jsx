import {
  NewsletterSection,
  NewsletterContainer,
  NewsletterTitle,
  NewsletterContent,
} from "./NewsletterStyle";
import { Button } from "../Button/Button";

const Newsletter = () => {
  return (
    <>
      <NewsletterSection>
        <NewsletterContainer>
          <NewsletterTitle>
            <h2>
              Assine nossa <span>Newsletter</span>!
            </h2>
            <p>
              Se inscreva para receber novidades sobre novos produtos, descontos
              & muito mais!
            </p>
          </NewsletterTitle>

          <NewsletterContent>
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
