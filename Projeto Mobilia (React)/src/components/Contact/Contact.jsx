import {
  ContactSection,
  ContactContainer,
  ContactBox,
  ContactImg,
  ContactForm,
} from "./ContactStyle";
import { Button } from "../Button/Button";

const Contact = () => {
  return (
    <>
      <ContactSection id="contact">
        <ContactContainer>
          <ContactBox>
            <ContactImg></ContactImg>
            <ContactForm>
              <h2>
                Entre em <span>Contato</span>
              </h2>
              <label for="name">Nome</label>
              <input type="text" name="name" placeholder="Nome" />
              <label for="email">Endereço de e-mail</label>
              <input
                type="email"
                name="name"
                placeholder="Endereço de e-email"
              />
              <label for="message">Sua mensagem</label>
              <textarea placeholder="Sua mensagem"></textarea>
              <Button primary white big>
                Enviar
              </Button>
            </ContactForm>
          </ContactBox>
        </ContactContainer>
      </ContactSection>
    </>
  );
};

export default Contact;
