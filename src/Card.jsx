import React, {useState} from 'react'
import './CardComponent.css'
import Button from './Button' 

const Card = ({name, image, price, count = 0}) => {

    const [countOnCard, setCountOnCard] = useState(count);
    const [countOnCart, setCountOnCart] = useState(1);
    const [isLiked, setIsLiked] = useState(false);

    const toogleLiked = () => {
        setIsLiked(!isLiked);
    }

    var colorstyle = {color: 'white'};
    if (count>1000) colorstyle={color: 'green'};
    else if (count>100) colorstyle={color: 'blue'};
    else colorstyle={color: 'red'};

    const styles = {
        width: '100%',
        borderRadius: '3px',
    };

    const buyMe = () => {
        setCountOnCart(countOnCart + 1);
        setCountOnCard(countOnCard - 1);
        alert(`Товар ${name} был успешно добавлен в корзину ${countOnCart} !`);
    };

    return (
        <div className='card'>
            <img src={image} alt={name}  style={styles}/>
            <h2 className='titleName'>{name}</h2>
            <p className='price'>{price} руб.</p>
            <p className='count' style={colorstyle}>Осталось всего {countOnCard} штук</p>
            <Button label={"Купить"} onClick={buyMe} />
            <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                onClick={toogleLiked}
                style={{ cursor: 'pointer' }}
                fill={isLiked ? 'red' : 'none'}
                stroke={isLiked ? 'red' : 'currentColor'}
                strokeWidth='1.5'
            >
                <path d='M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z' />
            </svg>
        </div>
    )
};

export default Card;