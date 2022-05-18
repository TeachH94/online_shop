import React from 'react';
import '../Styles/SearchBox.css';

const SearchBox = ({Search: onSearch}) => {
    return(
        <div className='search-box'>
        <input className='searchbox-input' type='text' placeholder='Szukaj Produktu' onChange={onSearch}/>
        </div>
    )

}

export default SearchBox;