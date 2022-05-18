import React from 'react';


const Cart = ({addedProducts,removeFromCart}) => {
    return (
        <div className='cart-product-list'>
            {
                addedProducts.map((products, index) => {
                    return (
                        <div className='cart-product' key={index}>
                            <div className='cart-product-name'>{products.name}</div>
                            <div className='cart-product-price'>{products.price}zł</div>
                            <img alt ='' src={require('../Assets/checkbox.png')} onClick={event => removeFromCart(index, event.currentTarget)}/>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Cart;