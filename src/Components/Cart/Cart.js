import React, { Component } from 'react'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../context'
import CartList from './CartList'
import CartTotals from './CartTotals'

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    { value => {
                        const {cart} = value;
                        if (cart.length > 0)
                        {
                            return (
                                <React.Fragment>
                                    <h1 className="text-center mt-3 mb-5 page-title">Your Cart</h1>
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} history={this.props.history} />
                                </React.Fragment>
                            );
                        }
                        else
                            return (<EmptyCart />);
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
