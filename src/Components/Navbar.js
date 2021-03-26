import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/CCC-logo.png';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import cartIcon from '../images/cartIcon.png';
import { ProductConsumer } from '../context'

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
                                    <img src={logo} alt='store' className='ccc-logo' />
                                </Link>
                            </NavBar.Brand>
                        <NavBar.Toggle aria-controls="basic-navbar-nav" />
                        <NavBar.Collapse className="navbar-toggle" >
                            <Nav className="mr-auto">
                                <Nav.Link as={Link} eventKey="0" to="/" className="nav-link">
                                    Home
                                </Nav.Link>
                                <Nav.Link as={Link} eventKey="1" to="/products" className="nav-link">
                                    Shop
                                </Nav.Link>
                                <Nav.Link as={Link} eventKey="2" to="/gallery" className="nav-link">
                                    Gallery
                                </Nav.Link>
                                <Nav.Link as={Link} eventKey="3" to="/about" className="nav-link">
                                    About Us
                                </Nav.Link>
                                <Nav.Link as={Link} eventKey="4" to="/contact" className="nav-link">
                                    Contact
                                </Nav.Link>
                            </Nav>
                                <Nav.Link as={Link} eventKey="5" to="/cart" className="cart-link ml-0 pl-0 mr-3">
                                    <img className="cart-icon" src={cartIcon} alt="Cart"/>
                                    {value.addCartQuantity()}
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
