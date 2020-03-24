import React from 'react';

import './search-box.style.css'
export const SearchBox = ({ handleChange }) => {
    return (
        <input
            type='search'
            className='search'
            placeholder='Search Monsters'
            onChange={handleChange}                
        />
    );
}