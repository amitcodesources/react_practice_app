import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginProductApp = () => {

    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const user_id = data.get('user_id');
        const user_password = data.get('user_password');
        if (user_id === "admin" && user_password === "123") {
            sessionStorage.setItem('user_token', 'ABC123');
            navigate('/dashboard')
        } else {
            console.log('error');
        }
    };

    return (
        <div className='container w-25 mt-5'>
            <Form onSubmit={handleFormSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username"
                        name="user_id" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password"
                        name="user_password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
            <p>user_id === "admin" && user_password === "123"</p>
        </div>
    )
}

export default LoginProductApp


