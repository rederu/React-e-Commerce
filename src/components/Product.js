import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';


export class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <div className="productWrapper col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                            <div className="img-container p-5"
                                onClick={
                                    () => 
                                    value.handleDetail(id)
                                }>
                                <Link to="/details">
                                    <img src={img} alt={title} className="card-img-top" />
                                </Link>
                                <button
                                    className="cart-btn"
                                    disabled={inCart ? true : false}
                                    onClick={
                                        () => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }
                                    }
                                >

                                    {inCart ? (<p className="text-capitalize mb-0" disabled>{" "}in Cart</p>) : (<i className="fas fa-cart-plus" />)}
                                </button>
                            </div>


                        )}

                    </ProductConsumer>
                    {/*Card Footer*/}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="font-italic mb-0">
                            <span className="mr-1">${price}</span>
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}


export default Product;


