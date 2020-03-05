import React, { Component, Fragment } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    (value) => {
                        const { modalOpen, closeModal } = value;
                        const { img, title } = value.modalProduct;

                        if (!modalOpen) {
                            return null;
                        } else {
                            return (
                                <Fragment>
                                    <div className="modalContainer">
                                        <div className="container">
                                            <div className="row">
                                                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center py-5">
                                                    <h5>Item Added to the Cart</h5>
                                                    <img src={img} className="img-fluid" alt={title} />
                                                    <h6>The product {title} has been successfully added to your cart.</h6>
                                                    <Link to='/'>
                                                        <button type="button" class="btn btn-outline-primary mr-2" onClick={() => closeModal()}>Store</button>
                                                    </Link>
                                                    <Link to='/cart'>
                                                        <button type="button" class="btn btn-outline-danger ml-2" onClick={() => closeModal()}>Go to Cart</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </Fragment>
                            );
                        }
                    }
                }
            </ProductConsumer>
        );
    }
}

export default Modal;
