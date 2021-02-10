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
                    const {id, title, img, info, price} = value.detailProducts;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <Carousel>
                                        <div>
                                            <img className="d-block w-100" src={require("../images/as-above-main.jpg")} alt="1" />
                                        </div>
                                        <div>
                                            <img className="d-block w-100" src={require("../images/as-above-close-front.jpg")} alt="2" />
                                        </div>
                                        <div>
                                            <img className="d-block w-100" src={require("../images/as-above-distant-front.jpg")} alt="3" />
                                        </div>
                                    </Carousel>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h3 className="mb-5">${price}</h3>
                                    <p className="mb-5">{info}</p>
                                    <SizeSelector />
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
