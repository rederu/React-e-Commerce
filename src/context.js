import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext(); 

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct, 
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        /*cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,*/
    }
    
    componentDidMount() {
        //After all the elements of the page is rendered correctly, this method is called.
        this.setProducts();
    }

    setProducts = () => {
        //For rach item in store products
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return { products: tempProducts };
        });
    };

    getItem = (id) => {
        //Get item only if item Id is the same than id
        const product = this.state.products.find(item => item.id === id)
        return product;
    };

    handleDetail = (id) => {
        //
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        });
    };

    addToCart = (id) => {
        //Temporary product storage
        let tempProducts = [...this.state.products];
        //looking for the project from getItem
        const index = tempProducts.indexOf(this.getItem(id));
        // product is equal to temporary product with specific index
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { 
                    products: tempProducts, 
                    cart: [...this.state.cart, product] 
                };
        },
        () => {
            this.addTotals();
        }
        );
    };

    //Handles Modal window
    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return{modalProduct: product , modalOpen: true}
        });
    };

    closeModal = () =>{
        this.setState( () => {
            return{modalOpen : false}
        });
    };

    //Cart related Methods
    increment = (id) => {
        console.log("Increment Method")
    }

    decrement = (id) => {
        console.log("Decrement Method")
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart= tempCart.filter(item => item.id !==id);
        const index = tempProducts.indexOf(this.getItem(id));

        //Once we have the index
        let removedProduct = tempProducts[index];
        //Changing Properties

        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() =>{
            return{
                cart:[...tempCart],
                products:[...tempProducts]
            }
        })


        console.log("Item Removed");

    }

    clearCart = () => {
        console.log("Cart is Empty");
    }

    addTotals =() =>{
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax =subTotal * 0.15;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return{
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment:this.increment,
                    decrement:this.decrement,
                    removeItem: this.removeItem,
                    clearCart:this.clearCart,
                }}>
                {/*Returns all the children*/}
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
