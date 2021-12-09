import { clientsData } from "../../data/clientsData";
import {
  ClientsSection,
  ClientsContainer,
  ClientsTextWrapper,
  ClientsTitle,
  ClientsText,
  ClientsRow,
  ClientsColumn,
  ClientsWrapper,
  ClientsImage,
} from "./style";

const Clients = () => {
  return (
    <ClientsSection id="clients">
      <ClientsContainer>
        <ClientsTextWrapper>
          <ClientsTitle>Our Clients</ClientsTitle>
          <ClientsText>
            We’ve been working with the teams around the world.
          </ClientsText>
        </ClientsTextWrapper>

        <ClientsRow>
          {clientsData.map((clients, clientsIndex) => (
            <ClientsColumn key={clientsIndex}>
              {clients.map((item, index) => (
                <ClientsWrapper key={index}>
                  <ClientsImage src={`./images/companies/${item.name}.svg`} />
                </ClientsWrapper>
              ))}
            </ClientsColumn>
          ))}
        </ClientsRow>
      </ClientsContainer>
    </ClientsSection>
  );
};

export default Clients;
