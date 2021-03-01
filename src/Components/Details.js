import React, { Component } from 'react';
import {ProductConsumer} from '../context.js';
import {Link} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import SizeSelector from './SizeSelector.js';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id, title, img, info, price} = value.detailProduct;
                    const images = img.map((index) => 
                        <div>
                            <img className="img-fluid" src={index} />
                        </div>
                    );
                    return (
                        <div className="mx-2 pb-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 mb-3">
                                    <Carousel>{images}</Carousel>
                                </div>
                                <div className="col-10 mx-auto col-md-6 mb-3">
                                    <h3 className="mb-2">${price}</h3>
                                    <p className="mb-5">{info}</p>
                                    <SizeSelector />
                                    <Link to="/products">
                                        <button className="btn btn-black mr-5">Back to products</button>
                                    </Link>
                                    <span className="btn btn-black" 
                                        onClick={() => {
                                            if (value.size === "")
                                            {
                                                value.openSizePrompt();
                                            }
                                            else 
                                            {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }
                                    }}>
                                        Add to cart
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
