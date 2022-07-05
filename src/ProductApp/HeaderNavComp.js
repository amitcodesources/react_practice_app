import React from 'react'
// import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
export default function HeaderNavComp() {
    const navigate = useNavigate();
    const handleLogout = (e) => {
            sessionStorage.clear();
            navigate('/login');
    }
  return (
    <div>
            {/* <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand to="/dashboard">
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
                                <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar> */}


          <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
              <div className="container-fluid">
                  <NavLink className="navbar-brand" to="/dashboard">
                    <img src='./assets/img/cart.png' height={50} width={50} alt='Logo' />
                  </NavLink>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarScroll">
                      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                          <li className="nav-item">
                              <NavLink className="nav-link" to="/home">Home</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink className="nav-link" to="/about">About</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink className="nav-link" to="/addproduct">Add Product</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink className="nav-link" to="/showproduct">Show All Product</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                          </li>
                      </ul>
                      <button className="btn btn-outline-light" type="submit" onClick={handleLogout}>Logout</button>
                  </div>
              </div>
          </nav>
    </div>
  )
}
