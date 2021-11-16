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
  return (
    <NewsletterSection>
      <NewsletterContainer>
        <NewsletterContent>
          <Column>
            <NewsletterTitle>
              <strong>Subscribe to our newsletter</strong>
              <br /> A monthly digest of the new WOODIES products, hot offers,
              and resources.
            </NewsletterTitle>
          </Column>
          <Column>
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
