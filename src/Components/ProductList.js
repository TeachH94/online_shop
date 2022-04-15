import React from 'react';
import Product from './Product.js'

const ProductList = ({gpuList, onCartClick}) => {
    return(
        <div className = 'scroll'>
            {
            gpuList.map((e, i) => {
            return <Product name={gpuList[i].name}
            price={gpuList[i].price}
            brand={gpuList[i].brand}
            vram={gpuList[i].vram}
            clock={gpuList[i].clock}
            pic={gpuList[i].pic}
            key={i}
            onCartClick={onCartClick}
            productIndex={gpuList[i].id}
            /> 
            })
            }
        </div>
    )


    


}

export default ProductList;