import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'> 
            <img src={logo} alt="" />
            <div className='header-info'>
                <a href="/shope">Shope</a>
                <a href="/inventory">Inventory</a>
                <a href="/order">Order</a>
                <a href="about Us">About Us</a>
            </div>
        </nav>
    );
};

export default Header;