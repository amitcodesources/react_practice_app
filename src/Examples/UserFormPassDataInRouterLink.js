
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const UserFormPassDataInRouterLink = (props) => {

    const navigate = useNavigate();

    const [userdata, setUserData] = useState({
        username: "",
        email: "",
        city: "",
        phone: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        // navigate('/details', {state:userdata} )
        navigate('/details', {state:{data: userdata}} )
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <div>
            <h1>Registration Form</h1>
            <Form className="register-form">
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        name="username"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter city"
                        name="city"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter phone"
                        name="phone"
                        onChange={handleInputChange}
                    />
                </Form.Group>

                {/* <Link
                    className="btn btn-primary"
                    to={ {pathname: "/details" } , { data: userdata} } > 
                    Register </Link> */}
                <button className="btn btn-primary mt-3" onClick={handleSubmit}>
                        Submit
                </button>
            </Form>
        </div>
    )
}

export default UserFormPassDataInRouterLink