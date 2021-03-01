import React, {Component} from 'react'
import Product from './Product';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-1">
                    <div className="mx-3">
                        <h1 className="text-center mt-3">All products</h1>
                        <div className="row justify-content-center justify-content-md-start justify-content-lg-start justify-content-xl-start">
                            <ProductConsumer>
                                { value => {
                                    return value.products.map( product => {
                                        return <Product key={product.id} product={product} />;
                                    });
                                    }
                                }
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}