import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'


export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper classname="mx-auto my-3 col-9 col-md-6 col-lg-3">
                <div className="mx-4 my-4 card">
                    <div className="img-div p-2" onClick={console.log('you clicked me on this image container')}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <Link className="links" to="/details">
                          <p className="align-self-center mb-0">{title}</p>
                        </Link>
                        <h5 className="mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
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
}

`