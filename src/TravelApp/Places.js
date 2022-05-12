import React from 'react';
import { Button, Card } from 'react-bootstrap';

function Places(props) {
    return (
        <div class="d-flex justify-content-around mt-5">
                    <div>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.Znnf8HVHh9vqyoddbjj2RgHaE7&pid=Api&P=0&w=250&h=166" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Places To Visit
                        </Card.Text>
                        <Button variant="primary">Go</Button>
                    </Card.Body>
                    </Card>
                    </div>

                    <div>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.Znnf8HVHh9vqyoddbjj2RgHaE7&pid=Api&P=0&w=250&h=166" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Places To Visit
                        </Card.Text>
                        <Button variant="primary">Go</Button>
                    </Card.Body>
                    </Card>
                    </div>

                    <div>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.Znnf8HVHh9vqyoddbjj2RgHaE7&pid=Api&P=0&w=250&h=166" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Places To Visit
                        </Card.Text>
                        <Button variant="primary">Go</Button>
                    </Card.Body>
                    </Card>
                    </div>
        </div>
    );
}

export default Places;