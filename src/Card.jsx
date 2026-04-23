import React from 'react'

const card = ({name, color = 'green', status = 'в наличии', count = 0}) => {

    if (status == 'Отсутствует') count = 0;

    return (
        <span style = {{
            height: '100px',
            width: '150px',
            border: '5px solid',
            borderRadius: '5px',
            margin: '10px'
        }}>
            <h2>{name}</h2>
            <span style= {{
                color: color,
                fontFamily: 'Arial',
                fontSize: '12px',
                margin: '5px'
            }}>
                {status}
            </span>
            <span style={{
                color: color,
                fontFamily: 'Arial',
                fontSize: '12px',
                margin: '5px'
            }}>
                {count === 0 ? '' : count}
            </span>
        </span>
    )
};

export default card;