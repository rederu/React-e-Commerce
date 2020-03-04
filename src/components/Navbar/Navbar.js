import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.png';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-transparent navbar-light px-sm-5 border-bottom">
                <Link to="/">
                    <img src={logo} alt="React Store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">Products</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <button className="btn btn-success my-2 my-sm-0">
                        <i className="fas fa-cart-plus"/>
                        My Cart
                    </button>
                </Link>
            
            </nav>
        );
    }
}



export default Navbar;
