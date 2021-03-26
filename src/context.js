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
        count: 1,
        sizePromptOpen: false,
        quantity: 1,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        category: "All"
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

    getProductItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    getCartItem = (id, size) => {
        const product = this.state.cart.find(item => item.id === id && item.size === size);
        return product;
    }

    handleDetail = (id, size) => {
        const product = this.getProductItem(id);
        this.setState(() => {
            return {detailProduct:product, sizePromptOpen: false, size: ""}
        })
    }

    addToCart = (id, size) => {
        let tempProducts = [...this.state.products]    
        const index = tempProducts.indexOf(this.getProductItem(id));
        const product = {...tempProducts[index]};
        product.size = this.state.size;
        product.count = this.state.count;
        const cartIndex = this.state.cart.indexOf(this.getCartItem(id, size));

        // Covers the case when two of the exact same items are added to the cart
        if (cartIndex === -1) // The item added is not in the cart
        {
            product.total = product.price * product.count;
            this.setState(
                () => {
                    return { products: tempProducts, cart: [...this.state.cart, product] };
                },
                () => {
                    console.log(this.state.count);
                    this.addTotals();
                    this.resetCount();
                }                
            );
        }
        else // The item added is already in the cart
        {
            if (this.state.cart[cartIndex].count + this.state.count > 10)
            {
                alert("Unable to purchase more than 10 of any given item at this time")
                this.setState(
                    () => {
                        return { count: 1 };
                    },
                    () => {
                        this.closeModal();
                        this.resetCount();
                    }
                );
            }
            
            else
            {
                this.setState(
                    () => {
                        return { products: tempProducts, cart: [...this.state.cart] };
                    },
                    () => {
                        this.state.cart[cartIndex].count = this.state.cart[cartIndex].count + this.state.count;
                        this.state.cart[cartIndex].total = this.state.cart[cartIndex].price * this.state.cart[cartIndex].count;
                        this.addTotals();
                        this.resetCount();
                    }
                );
            }
        }
    }

    openModal = (id, size) => {
        const product = this.getProductItem(id);
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

    // Removes an item from the cart list and re-renders with the updated cart list
    removeItem = (id, size) => {
        // Remove the item from the cart array in the state
        const product = this.getCartItem(id, size);
        const index = this.state.cart.indexOf(product);
        if (index > -1) {
            this.state.cart.splice(index, 1);
        }

        // Update the product count back to zero
        product.count = 0;

        this.setState(
            () => {
                return {cart: [...this.state.cart]}},
            () => {
                this.addTotals();
            }
        )
    }

    // Increment the cart product count and update total cost
    // Product count should not exceed 10 for any given item
    increment = (id, size) => {
        // Get the cart item
        const product = this.getCartItem(id, size);

        if (product.count < 10)
        {
            product.count += 1;
            product.total = product.count * product.price;
            this.setState(
            () => {
                return {cart: [...this.state.cart]}
            },
            () => {
                this.addTotals();
            })
        }
        else
        {
            alert("Unable to purchase more than 10 of any given item at this time");
        }
    }

    // Decrement the cart product count and update total cost
    // Product count is to be removed when a count of 0 is reached
    decrement = (id, size) => {
        // Get the cart item
        const product = this.getCartItem(id, size);

        if (product.count === 1)
        {
            // Remove from cart
            this.removeItem(id, size);
        }
        else
        {
            // Update values
            product.count -= 1;
            product.total = product.count * product.price;
            this.setState(() => {
                return {cart: [...this.state.cart]}
            },
            () => {
                this.addTotals();
            })
        }
    }

    clearCart = () => {
        this.setState(() => {
            return {cart: []}
        })
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tax = subTotal * 0.08;
        const total = subTotal + tax;

        // Always display all values to two decimal places
        let displaySubTotal = (Math.round(subTotal * 100) / 100).toFixed(2);
        let displayTax = (Math.round(tax * 100) / 100).toFixed(2);
        let displayTotal = (Math.round(total * 100) / 100).toFixed(2);

        this.setState(() => {
            return {
                cartSubTotal: displaySubTotal,
                cartTax: displayTax,
                cartTotal: displayTotal
            }
        })
    }

    addCartQuantity = () => {
        let totalQuantity = 0;
        if (this.state.cart.length === 0)
        {
            return 0;
        }

        this.state.cart.map(item => (totalQuantity += item.count));
        return totalQuantity;
    }

    setCategory = (selectedCategory) => {
        this.setState(() => {
            return {
                category: selectedCategory.value
            }
        })
    }
    setCount = (selectedCount) => {
        this.setState(
            () => {
            return { count: selectedCount.value }}
        )
    }

    resetCount = () => {
        this.setState(
            () => {
                return { count: 1 }
            }
        )
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
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                addCartQuantity: this.addCartQuantity,
                setCategory: this.setCategory,
                setCount: this.setCount,
                resetCount: this.resetCount
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};