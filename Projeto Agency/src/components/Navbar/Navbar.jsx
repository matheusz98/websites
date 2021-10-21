import {
  Container,
  Wrapper,
  Left,
  Logo,
  Menu,
  MenuItem,
  Button,
} from "./NavbarStyle";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>Join Now</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
