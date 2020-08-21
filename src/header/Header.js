import React, { useState } from 'react';
import { Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import logo from './logo.svg';
import { logout } from '../service/auth';

function Header() {
    

    return (
        <Navbar className="bg-ligh border-bottom">

            <Navbar.Brand href="#home">
                <img src={logo} height="50" />
            </Navbar.Brand>

            <Nav activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={logout}>Logout</Nav.Link>
                </Nav.Item>
            </Nav>

            <Form inline className="ml-auto">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button type="submit">Search</Button>
            </Form>
        </Navbar>
    );
}

export default Header;