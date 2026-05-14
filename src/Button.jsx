import React from 'react'
import './css/CardComponent.css'


export default ({label, onClick, disabled = false}) => {

    return (
        <button
            onClick={onClick}
            disabled = {disabled}
            className='btn'

        >
            {label}
        </button>
    )
};