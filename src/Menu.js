import React, { Component } from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';




class Menu extends Component {
    render() {
        return (
            
            <div>

                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand as={Link} to="/">
                            React-Bootstrap
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/" activeStyle={{ backgroundColor: '#88e' }}>
                                Home
                                </Nav.Link>
                                <Nav.Link as={Link} to="/about">
                                AboutUs
                                </Nav.Link>
                                <Nav.Link as={Link} to="/showproduct">
                                Products
                                </Nav.Link>
                                <Nav.Link as={Link} to="/addproduct">
                                Add Product
                                </Nav.Link>
                                <Nav.Link as={Link} to="/contact">
                                ContactUs
                                </Nav.Link>
                                <Nav.Link as={Link} to="/login">
                                Login
                                </Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                        </Navbar>
                      
            </div>
        );
    }
}

export default Menu;