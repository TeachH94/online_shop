import React from 'react';


const Product = ({price, brand, vram, clock, pic, name, onCartClick, id}) => {
    return (
        <div className='product'>
            <img  alt ='' src = {require(`../Assets/${pic}`)}></img>
            <div className='specs'>
                <h1 className='producth1'>{name}</h1>
                <p>{`Ilość pamięci RAM: ${vram}GB`}</p>
                <p>{`Taktowanie rdzenia: ${clock} MHz`}</p>
                <p>{`Producent: ${brand}`}</p>
            </div>
            <div className='price'>
                <h1 className ='producth1'>{`${price} zł`}</h1>
                <input className='productInput' type='button' value='Do koszyka' onClick={event => onCartClick(id)} />
            </div>
        </div>
    )
}


export default Product;