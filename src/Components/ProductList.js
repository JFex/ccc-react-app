import React, {Component} from 'react'
import Product from './Product';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-1">
                    <div className="container">
                        <h1 className="text-center mt-3">All products</h1>
                        <div className="row">
                            <ProductConsumer>
                                { value => {
                                    return value.storeProducts.map( product => {
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