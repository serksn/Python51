import React from 'react'

export default ({label, onClick, disabled = true}) => {
    return (
        <button
            onClick={onClick}
            disabled = {disabled}
            className='default'
        >
            {label}
        </button>
    )
};