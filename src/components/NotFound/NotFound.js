import React, { Component } from 'react';
import './NotFound.css';
import {Link} from 'react-router-dom';


export class NotFound extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title pt-5">
                        <h1 className="display-2"> 404</h1>
                        <h1 className="mt-2">ERROR</h1>
                        <h3 className="mt-3">Page not found</h3>
                        <h6>The requested URL <span className="text-success">{this.props.location.pathname}</span>{" "} was not found.</h6>
                        <Link to="/"><button type="button" className="toStore btn btn-outline-dark btn-sm mt-5">Go back to Store</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;
