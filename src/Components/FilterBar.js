import React from 'react';

const CHECKBOXES = [
    {min: 1501, max: +Infinity, label: 'Ponad 1500MHz'},
    {min: 1001, max: 1500, label: '1001 - 1500MHz'},
    {min: 0, max: 1000, label: 'Do 1000MHz'},
]

const FilterBar = ({AmdCheckBox, GeforceCheckBox, getPriceMin, getPriceMax, getVram, onCheckboxToggle}) => {

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
                {
                    CHECKBOXES.map((checkbox, index) => {
                        return (
                            <div key={index}>
                                <label>
                                    <input type='checkbox'
                                       onChange={event => onCheckboxToggle({min: checkbox.min, max: checkbox.max}, event.target.checked)}/>
                                    <span>{checkbox.label}</span>
                                </label>
                            </div>
                        )
                    })
                }
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