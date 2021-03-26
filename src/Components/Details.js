import React, { Component } from 'react'
import {ProductConsumer} from '../context.js'
import {Link} from 'react-router-dom'
import SizeSelector from './SizeSelector.js'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import QuantityDropdown from "./QuantityDropdown"

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id, title, img, info, price, size, count} = value.detailProduct;

                    const images = img.map(singleImage =>
                        <div>
                            <img className="img-fluid" key={img.indexOf(singleImage)} src={singleImage} alt="Product"/>
                        </div>
                );
                    
                    return (
                        <div className="mx-2 pb-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-uppercase page-title my-5">
                                    <h1 className="page-title">{title}</h1>
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
                                    <div className="my-4">
                                        <span className="float-left mr-2">Quantity: </span>
                                        <QuantityDropdown className="" onChange={value.setCount}/>
                                    </div>
                                    <Link to="/products">
                                        <button className="btn btn-black mr-2">Back to products</button>
                                    </Link>
                                    <span className="btn btn-black" 
                                        onClick={() => {
                                            if (value.size === "")
                                            {
                                                value.openSizePrompt();
                                            }
                                            else 
                                            {
                                                value.addToCart(id, value.size);
                                                value.openModal(id, value.size);
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
