import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, Navigate } from 'react-router-dom';
// import { Navigate, Routes, Route } from 'react-router-dom'
// import Home from './Home';
// import AboutProduct from './AboutProduct';
// import AddProduct from './AddProduct';
// import ProductData from './ProductData';
// import ContactUs from './ContactUs';
// import PageNotFound from './PageNotFound';
// import ProtectedRoutes from './ProtectedRoutes';

export default class DashboardProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islogout: false
        };
    }

    signOut = () => {
        localStorage.removeItem("user_token");
        this.setState({
            islogout: true
        });
    };

    render() {
        if (this.state.islogout) {
            return <Navigate to="/login" />;
          }
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

                                <NavLink className="btn btn-primary" onClick={this.signOut}>
                                    SignOut
                                </NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

        {/* <Routes>
            <Route exact path="home" element={<Home />} />
            <Route exact path="about" element={<AboutProduct />} />
            <Route exact path="addproduct" element={<AddProduct />} />
            <Route exact path="showproduct" element={<ProductData />} />
            <Route exact path="contact" element={<ContactUs />} />
            <Route exact path="*" element={<PageNotFound />} />
        </Routes> */}
</>
        );
    }
}

