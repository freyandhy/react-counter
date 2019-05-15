import React from 'react';
import { Container, Navbar, NavbarBrand } from "reactstrap";

const Header = (props) => {
  return (
    <div className="Header">
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">{props.title}</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
}
 
export default Header;