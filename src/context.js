import React, { Component } from 'react'
import {storeProducts, detailProduct} from "./ProductData";


const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        size: "",
        sizePromptOpen: false,
        quantity: 1,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item =>  {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return {products: tempProducts}
        })
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct:product, sizePromptOpen: false, size: ""}
        })
    }

    addToCart = (id) => {
        console.log(this.state.cart);
        let tempProducts = [...this.state.products]    
        const index = tempProducts.indexOf(this.getItem(id));
        const product = {...tempProducts[index]};
        product.size = this.state.size;
        //product.count = product.count + 1;
       // product.total = product.price * product.count;
        console.log(product);
        // FIX: Cover the case when two of the exact same items are added to the cart

        this.setState(
            () => {
                return { products: tempProducts, cart: [...this.state.cart, product] };
            }
        );
    };

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct: product, modalOpen: true}
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false}
        })
    }

    openSizePrompt = () => {
        this.setState(() => {
            return {sizePromptOpen: true}
        })
    }

    closeSizePrompt = () => {
        this.setState(() => {
            return {sizePromptOpen: false}
        })
    }

    setSize = (tempSize) => {
        this.setState(() => {
            return {size: tempSize}
        })
    }

    increment = (id) => {

    }

    decrement = (id) => {
        console.log("Decrement called")
    }

    removeItem = (id) => {
        console.log(this.state.products);
        // Remove the item the cart array in the state
        let tempProducts = [...this.state.products];
        const product = this.getItem(id);
        const index = this.state.cart.indexOf(product);
        if (index > -1) {
            this.state.cart.splice(index, 1);
        }

        // Update the product count back to zero
        product.count = 0;

        this.setState(() => {
            return {cart: [...this.state.cart]}
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                openSizePrompt: this.openSizePrompt,
                closeSizePrompt: this.closeSizePrompt,
                setSize: this.setSize,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};