import React from 'react';

const CLOCK_CHECKBOXES = [
    {min: '1501', max: '+Infinity', label: 'Ponad 1500MHz'},
    {min: '1001', max: '1500', label: '1001 - 1500MHz'},
    {min: '0', max: '1000', label: 'Do 1000MHz'},
]

const VRAM_CHECKBOXES = [
    {vram: '4', label: '4GB'},
    {vram: '6', label: '6GB'},
    {vram: '8', label: '8GB'},
    {vram: '12', label: '12GB'}

]

const BRAND_CHECKBOXES = [
    {brand: 'AMD', label: 'AMD'},
    {brand: 'Geforce', label: 'Geforce'}
]

const FilterBar = ({onBrandCheckboxToggle, onPriceMinValueChange, onPriceMaxValueChange, onVramCheckboxToggle, onClockCheckboxToggle}) => {

    return (
        <div className='filter-bar'>
            <h1 className='h1-filterBar'>Producent</h1>
            <div className='filters'>
                {
                    BRAND_CHECKBOXES.map((checkbox, index) => {
                        return (
                            <div key={index}>
                                <label>
                                        <input type='checkbox' onChange={event =>onBrandCheckboxToggle(checkbox.brand, event.target.checked)}/>
                                        <span>{checkbox.label}</span>
                                </label>
                            </div>
                        )
                    })
                }
            </div>

            <h1 className='h1-filterBar'>Cena</h1>
            <div className='price-filter'>
                <input type='number' name='priceMin' placeholder='od' onChange={onPriceMinValueChange}/>
                <label>-</label>
                <input type='number' name='priceMax' placeholder='do' onChange={onPriceMaxValueChange}/>
            </div>

            <h1 className='h1-filterBar'>Taktowanie rdzenia</h1>
            <div className='filters'>
                {
                    CLOCK_CHECKBOXES.map((checkbox, index) => {
                        return (
                            <div key={index}>
                                <label>
                                    <input type='checkbox'
                                       onChange={event => onClockCheckboxToggle({min: checkbox.min, max: checkbox.max}, event.target.checked)}/>
                                    <span>{checkbox.label}</span>
                                </label>
                            </div>
                        )
                    })
                }
            </div>

            <h1 className='h1-filterBar'>Ilość pamięci RAM</h1>
            <div className='filters'>
                {
                    VRAM_CHECKBOXES.map((checkbox, index) => {
                        return (
                            <div key={index}>
                                <label>                           
                                    <input type='checkbox' onChange={event => onVramCheckboxToggle(checkbox.vram, event.target.checked)} />
                                    <span>{checkbox.label}</span>
                                </label>
                            </div>
                        )
                    })
                }
            </div>

        </div>


    )
}


export default FilterBar;