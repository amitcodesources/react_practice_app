import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function HeaderNavComp() {

    const navigate = useNavigate();
    const handleLogout = (e) => {
        sessionStorage.clear();
        navigate('/login');
    }
    return (
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
    )
}

export default HeaderNavComp;