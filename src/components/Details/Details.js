import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import {Link} from 'react-router-dom';

export class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                 const {id, author,img, info, price, title, inCart} =  value.detailProduct;
                 //Product Information
                 return (
                     <div className="container py-5">
                         <div className="row">
                             <div className="col-10 mx-auto text-center text-slanted, my-5">
                                 <h1>{title}</h1>
                             </div>
                         </div>
                         <div className="row">
                             <div className="Col-10 mx-auto col-md-6 my-3">
                                <img src={img} className="img-fluid" alt={title}/>
                             </div>
                             <div className="Col-10 mx-auto col-md-6 my-3 text-capitalize">
                                 <h2>Model: {title}</h2>
                                 <h4 className="text-title text-uppercase text-muted mt-3 mb-2">author: <span className="">{author}</span></h4>
                                 <h4><strong>Price: <span>$</span>{price}</strong></h4>
                                 <p className="font-weight-bold mt-3 mb-0">Product Information: </p>
                                 <p className="text-muted-lead">{info}</p>

                                 <Link to ="/">
                                     <button className="btn btn-outline-primary mr-2">Back to Store</button>
                                 </Link>

                                <button className="btn btn-outline-success ml-2"
                                    disabled = {inCart ? true: false}
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                    
                                    {inCart ? "In Cart": "Add to Cart"}
                                </button>

                             </div>
                         </div>
                     </div>
                 )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;
