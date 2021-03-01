import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/dummy-logo.png';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import cartIcon from '../images/cartIcon.png';
import {ProductConsumer} from '../context'

export default class Navbar extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {cart} = value;

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
                                <Nav.Link className="links" eventKey="1" as={Link} to="/">
                                    Home
                                </Nav.Link>
                                <Nav.Link eventKey="2" as={Link} to="/products" className="links">
                                    Shop
                                </Nav.Link>
                                <Nav.Link eventKey="3" as={Link} to="/gallery" className="links">
                                    Gallery
                                </Nav.Link>
                                <Nav.Link eventKey="4" as={Link} to="/about" className="links">
                                    About Us
                                </Nav.Link>
                                <Nav.Link eventKey="5" as={Link} to="/contact" className="links">
                                    Contact
                                </Nav.Link>
                            </Nav>
                                <Nav.Link eventKey="6" as={Link} to="/cart" className="links pull-right">
                                    View Cart ({cart.length})
                                </Nav.Link>
                            </NavBar.Collapse>
                        </NavBar>
                    )
                }
                }
            </ProductConsumer>
        )
    }
}
