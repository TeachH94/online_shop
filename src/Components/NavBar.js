import React from 'react';
import logo from '../Assets/gpu.jpg';
import cartPic from '../Assets/cart.jpg';
import Cart from './Cart.js'

function NavBar ({cartAddedProducts}) {
    return (
        <div className='navBar'>
            <img src={logo} alt='' />

            <div className='cart'>
                <div className='navbar-cart-wrap'>
                    <img className='cart-pic' src={cartPic} width='46' height='38' alt=''/>
                    <span className='cart-price'>0,00 zł</span>
                </div>

                <div className='cart-dropdown-list'>
                    <Cart addedProducts={cartAddedProducts}/>
                </div>
            </div>
        </div>
    );
}

export default NavBar;