import React, { Component } from 'react'
import {storeProducts, detailProducts} from "./ProductData";


const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        storeProducts:storeProducts,
        detailProducts:detailProducts
    };

    handleDetail = () => {
        console.log("hello from detail")
    }

    addToCart = () => {
        console.log("hello from add to cart")
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};