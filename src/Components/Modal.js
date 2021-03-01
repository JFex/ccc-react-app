import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default class extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;

                    if (!modalOpen) {
                        return null;
                    }

                    else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center">
                                            <h5 className="my-3">Item added to the cart</h5>
                                            <img className="my-3" src={img[0]} className="img-fluid" alt="product" />
                                            <h5 className="my-3">{title}</h5>
                                            <h5 className="my-3">${price}</h5>
                                            <div className="justify-content-center">
                                            <Link to="/products">
                                                <button className="btn btn-black my-3 mx-2" onClick={() => closeModal()}>
                                                    Continue shopping
                                                </button>
                                            </Link>
                                            <Link to="/cart">
                                                <button className="btn btn-black my-3 mx-2" onClick={() => closeModal()}>
                                                    Go to cart
                                                </button>
                                            </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;

    #modal{
        background: white;
    }
`