import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';



function Header(props) {
    return (
        <div>
                    <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Travel</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <NavDropdown title="Places" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Goa</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Mumbai</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Hyderabad</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Kashmir</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
        </div>
    );
}

export default Header;