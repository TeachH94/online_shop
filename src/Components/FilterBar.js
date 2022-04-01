import React from 'react';

const FilterBar = ({AmdCheckBox, GeforceCheckBox, getPriceMin, getPriceMax, getVram, getClock}) => {
    return (
        <div className='filter-bar'>
                <h1 className='h1-filterBar'>Producent</h1>
                    <div className='filters'>
                        <div>
                            <input type="checkbox" name='amd' onChange={AmdCheckBox}/>
                            <label>AMD</label>
                        </div>

                        <div>
                            <input type="checkbox" name='geforce' onChange={GeforceCheckBox}/>
                            <label>Geforce</label>
                        </div>
                    </div>    

                <h1 className='h1-filterBar'>Cena</h1>
                    <div className='price-filter'>
                        <input type='number' name='priceMin' placeholder='od' onChange={getPriceMin}/>
                        <label>-</label>
                        <input type='number' name='priceMax' placeholder='do' onChange={getPriceMax}/>
                    </div>

                <h1 className='h1-filterBar'>Taktowanie rdzenia</h1> 
                    <div className='filters'>
                        <div>
                            <input data-clock-min='1501' data-clock-max='+Infinity' type='checkbox' onChange={getClock}/>
                            <label>Ponad 1500MHz</label>
                        </div>
                        <div>
                            <input data-clock-min='1001' data-clock-max='1500' type='checkbox' onChange={getClock}/>
                            <label>1001 - 1500MHz</label>
                        </div>
                        <div>
                            <input data-clock-min='0' data-clock-max='1000' type='checkbox' onChange={getClock}/>
                            <label>Do 1000MHz</label>
                        </div>                

                    </div>

                <h1 className='h1-filterBar'>Ilość pamięci RAM</h1> 
                    <div className='filters'>
                        <div>
                            <input data-vram='4' type='checkbox' onChange={getVram}/>
                            <label>4GB</label>
                        </div>
                        <div>
                            <input data-vram='6' type='checkbox' onChange={getVram}/>
                            <label>6GB</label>
                        </div>
                        <div>
                            <input data-vram='8' type='checkbox' onChange={getVram}/>
                            <label>8GB</label>
                        </div>
                        <div>
                            <input data-vram='12' type='checkbox' onChange={getVram}/>
                            <label>12GB</label>
                        </div>                

                    </div>      

        </div>
        
        
    )
}


export default FilterBar;