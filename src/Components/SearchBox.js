import React from 'react';

const SearchBox = ({Search}) => {
    return(
        <div className='search-box'>
        <input className='searchbox-input' type='text' placeholder='Szukaj Produktu' onChange={Search}/>
        </div>
    )

}

export default SearchBox;