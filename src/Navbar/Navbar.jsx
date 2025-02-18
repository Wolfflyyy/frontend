import React from 'react';
import './Navbar.css'
import logo from '../Components/Assets/logo.png'
import cart_icon from '../Components/Assets/cart_icon.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li>Shop</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt="" />
            </div>
        </nav>
    );
};

export default Navbar;