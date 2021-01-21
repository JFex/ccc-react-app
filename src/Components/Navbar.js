import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/dummy-logo.png';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import cartIcon from '../images/cartIcon.png';
import { Container } from 'react-bootstrap';

export default class Navbar extends Component {
    render() {
        return (
                <NavBar collapseOnSelect sticky="top" bg="light" className='border-bottom' expand="md">
                <NavBar.Brand>
                    <Link to='/'>
                        <img src={logo} alt='store' className='navbar-brand' />
                    </Link>
                </NavBar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav" />
                <NavBar.Collapse className="navbar-toggle" >
                <Nav className="mr-auto">
                    <Link to="/" className="links">
                      Home
                    </Link>
                    <Link to="/products" className="links">
                      Shop
                    </Link>
                    <Link to="/gallery" className="links">
                        Gallery
                    </Link>
                    <Link to="/about" className="links">
                        About Us
                    </Link>
                    <Link to="/contact" className="links">
                        Contact
                    </Link>
                    <Link to="/cart" className="links">
                        View Cart
                    </Link>
                </Nav>
                </NavBar.Collapse>
            </NavBar>
        )
    }
}
