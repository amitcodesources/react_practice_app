import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class DashboardProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islogout: false
        };
    }

    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand to="/">
                            React-Bootstrap
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink to="/home">
                                    Home
                                </NavLink>
                                <NavLink to="/about">
                                    About Product
                                </NavLink>
                                <NavLink to="/showproduct">
                                    Show Products
                                </NavLink>
                                <NavLink to="/addproduct">
                                    Add Product
                                </NavLink>
                                <NavLink to="/contact">
                                    ContactUs
                                </NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

