import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
            
                <Nav className="justify-content-center">
                       <Nav.Link href="#features">Features</Nav.Link>
                       <Nav.Link href="#pricing">Pricing</Nav.Link>
                       <Nav.Link href="#deets">More deets</Nav.Link>
                       <Nav.Link  href="#memes">Dank memes</Nav.Link>
                </Nav>
            
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;