import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Cart</Nav.Link>
            <Nav.Link href="#link"><i class="fa-regular fa-user"></i>&nbsp;Sign in</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header