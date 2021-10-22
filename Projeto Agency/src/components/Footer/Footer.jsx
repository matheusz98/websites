import { Container, Wrapper, List, ListItem, Copyright } from "./FooterStyle";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>&copy; Agency 2021. All Rights Reserved</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
