import React, {Component} from 'react'
import Product from './Product';
import {ProductConsumer} from '../context';
import FilterDropdown from './FilterDropdown';
import 'react-dropdown/style.css';

const options = ['All', 'Shirts', 'Hoodies', 'Pants', 'Hats'];

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="d-block py-1 mx-3">
                    <h1 className="text-uppercase text-bold page-title text-center mt-5">Shop all products</h1>
                    <ProductConsumer>
                            { value => {
                                return <FilterDropdown onChange={value.setCategory}/>;
                            }
                        }
                    </ProductConsumer>
                    <div className="row justify-content-center">
                        <ProductConsumer>
                            { value => {
                                return value.products.map( product => {
                                    if (value.category === "All")
                                        return <Product key={product.id} product={product} />;

                                    else if (product.category === value.category)
                                        return <Product key={product.id} product={product} />;
                                    });
                                }
                            }       
                        </ProductConsumer>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}