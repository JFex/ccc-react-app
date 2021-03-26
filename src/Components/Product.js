import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'


export default class Product extends Component {
    render() {
        const {id, title, img, price, size} = this.props.product;
        return (
            <ProductWrapper classname="mx-auto my-3 col-12 col-md-6 col-lg-3">
                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                            <div>
                                <div className="img-div px-3 pt-3 pb-1" 
                                    onClick={() => 
                                    value.handleDetail(id, size)}>
                                    <Link to="/details">
                                        <img src={img[0]} alt="product" className="card-img-top"/>
                                    </Link>
                                </div>
                                <div className="card-footer">
                                    <Link className="product-links" to="/details" onClick={() => 
                                      value.handleDetail(id, size)}>
                                        <p className="mb-0">{title}</p>
                                    </Link>
                                    <h6>
                                        <span className="mr-1">$</span>
                                        {price}
                                    </h6>
                                </div>
                            </div>
                            
                        )}
                    </ProductConsumer>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`
.card {
    border-color: transparent;
}

.card-footer {
    background: transparent;
    border-top: transparent;
    padding-top: 0px;
}

`