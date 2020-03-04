import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.png';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-light px-sm-5">
                <Link to="/">
                    <img src={logo} alt="Our Store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                            <Link to="/" className="nav-link"><button type="button" class="btn btn-link">Products</button></Link>
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

/*
//with styled-component installed
const ButtonContainer = styled.button`
text-transform: capitalize;
font-size:1.4rem;
background: transparent;
border: 0.05rem solid;
color: 
cursos: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
//Hover
&:hover{
    background:;
    color: ;
}
&:focus{
    outline:none;
}
`;


const NavWrapper = styled.nav`
background: ;
.nav-link{
    color: white;
    font-size: 1.3rem;
    text-transform: capitalize;
}
`;*/

export default Navbar;
