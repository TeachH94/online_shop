import React from 'react';
import Product from './Product.js'

const ProductList = ({gpuList}) => {
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
            /> 
            })
            }
        </div>
    )


    


}

export default ProductList;