import React from 'react';
import logo from '../Assets/gpu.jpg';
import cartPic from '../Assets/cart.jpg';
import Cart from './Cart.js';
import '../Styles/NavBar.css';



function NavBar ({cartAddedProducts,removeFromCart,onCartClick, cartDropdown}) {


    return (
        <div className='navBar'>
            <img src={logo} alt='' />

            <div className={'cart' + (cartDropdown ? ' active' : "")} >
                <div tabIndex={0} className='navbar-cart-wrap' onClick={onCartClick} >
                    <img className='cart-pic' src={cartPic} width='46' height='38' alt=''/>
                    <span className='cart-price-sum'>
                    {
                        cartAddedProducts.reduce((totalPrice,item) => {
                            return totalPrice + item.price
                        }, 0) + ',00 zł'
                    }
                    </span>
                </div>

                <div className='cart-dropdown-list'>
                    <Cart addedProducts={cartAddedProducts}
                            removeFromCart={removeFromCart}/>
                </div>
            </div>
        </div>
    );
}

export default NavBar;