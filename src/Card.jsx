import React from 'react'
import './CardComponent.css'
import Button from './Button' 

const Card = ({name, image, price, count = 0}) => {

    var colorstyle = {color: 'white'};
    if (count>1000) colorstyle={color: 'green'};
    else if (count>100) colorstyle={color: 'blue'};
    else colorstyle={color: 'red'};

    const styles = {
        width: '100%',
        borderRadius: '3px',
    };

    const buyMe = () => {
        alert(`Товар ${name} был успешно добавлен в корзину!`);
    };

    return (
        <div className='card'>
            <img src={image} alt={name}  style={styles}/>
            <h2 className='titleName'>{name}</h2>
            <p className='price'>{price} руб.</p>
            <p className='count' style={colorstyle}>Осталось всего {count} штук</p>
            <Button label={"Купить"} onClick={buyMe} />
        </div>
    )
};

export default Card;