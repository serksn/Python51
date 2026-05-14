import React, {useState} from 'react'

export function CounterButton({name, onClick}) {
    return (
        <button
            style={{
                margin: "20px",
                backgroundColor: "red"
            }}
            onClick={onClick}
        >
            {name}
        </button>
    )
}

export function CounterDisplay({value}) {
    return (
        <div>
            Текущее значение {value}
        </div>
    )
}
