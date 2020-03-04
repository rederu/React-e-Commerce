import React from 'react';

export default function CartColumns () {
        return (
            <div className="container-fluid text-center d-none d-lg-block">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                        <p clasName="text">Products</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p clasName="text">Product Name</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p clasName="text">Price</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p clasName="text">Quantity</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p clasName="text">Remove</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p clasName="text">Total</p>
                    </div>
                   
                </div>
            </div>
        );
    }

