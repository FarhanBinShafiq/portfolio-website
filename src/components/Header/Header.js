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
            
                <Nav className="ml-auto nav-menu">
                       <Nav.Link href="#">Home</Nav.Link>
                       <Nav.Link href="#">About</Nav.Link>
                       <Nav.Link href="#">Projects</Nav.Link>
                       <Nav.Link  href="#">Experience</Nav.Link>
                       <Nav.Link href="#">Education</Nav.Link>
                       <Nav.Link href="#">Contact</Nav.Link>
                       
                </Nav>
            
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;