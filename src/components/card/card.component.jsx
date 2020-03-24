import React from 'react';
import './card.style.css';

export const Card = ({monster}) => {
    return (
        <div className='card-container'>
            <img src={`https://picsum.photos/180?random=${monster.id}`} alt='Monster'/>
            <h3> {monster.name}</h3>
            <p>{monster.email}</p>
        </div>
    );
}