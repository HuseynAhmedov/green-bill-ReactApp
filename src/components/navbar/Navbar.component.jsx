import { Component } from "react";
import './Navbar.style.scss'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavbarCustom extends Component
{
    constructor(){
        super();
    }
    render(){
        return (
          <Navbar expand="lg" className="navbar-custom">
            <Container className="navbar-container">
              <Navbar.Brand className="navbar-brand" href="#home">Green Bill</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link className="navbar-link" href="#home">Home</Nav.Link>
                  <Nav.Link className="navbar-link" href="#link">Currencies</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }
}
export default NavbarCustom;