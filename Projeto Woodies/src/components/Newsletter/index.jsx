import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  NewsletterSection,
  NewsletterContainer,
  NewsletterContent,
  Column,
  NewsletterTitle,
  NewsletterForm,
  NewsletterInput,
  NewsletterButton,
} from "./style";

const Newsletter = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <NewsletterSection>
      <NewsletterContainer>
        <NewsletterContent>
          <Column data-aos="fade-right">
            <NewsletterTitle>
              <strong>Subscribe to our newsletter</strong>
              <br /> A monthly digest of the new WOODIES products, hot offers,
              and resources.
            </NewsletterTitle>
          </Column>
          <Column data-aos="fade-left">
            <NewsletterForm>
              <NewsletterInput type="email" placeholder="Your email address" />
              <NewsletterButton>Subscribe</NewsletterButton>
            </NewsletterForm>
          </Column>
        </NewsletterContent>
      </NewsletterContainer>
    </NewsletterSection>
  );
};

export default Newsletter;
