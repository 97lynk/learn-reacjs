import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { login } from './service/auth';
import { getAccessToken } from './service/token';
import { useHistory } from 'react-router-dom';

export default function LoginPage() {

    const history = useHistory();

    useEffect(() => {
        if (getAccessToken()) {
            history.push('/')
        }
    }, []);

    const [username, setUsername] = useState('tuan');
    const [password, setPassword] = useState('secret');

    function submitLogin() {

        login(username, password,
            (res) => {
                history.push('/');
            });
    }


    return (

        <Container>
            <Row style={{height: '100vh'}}>
                <Col sm={9} md={7} lg={5} className="mx-auto align-self-center">
                    <Card>
                        <Card.Body>
                            <Card.Title>Sign In</Card.Title>

                            <Form>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter email" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" onClick={submitLogin}>
                                    Submit
                                </Button>
                                {/* <hr class="my-4" />
                                <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
                                <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button> */}
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
}