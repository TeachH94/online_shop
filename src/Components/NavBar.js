import React from 'react';
import logo from '../Assets/gpu.jpg';
import cart from '../Assets/cart.jpg';

function NavBar () {
    return (
        <div className='navBar'>
            <img src={logo} alt='' />
            <img className='cart' src={cart} width='52' height='46' alt='' />
        </div>
    );
}

export default NavBar;