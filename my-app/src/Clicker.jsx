import React from "react";

function ClickExample() {
    const handleClicker = (msg) => {
        alert('Это работает как передаемая функция в параметр onClick!');
    }
    const handleClickerWithParams = (msg) => {
        alert(msg);
    }
    return (
        <>
            <h1>Первый вариант</h1>
            <button onClick={()=>{alert('Это работает внутри onClick и только тут')}}>Первый вариант</button>
            <h1>Второй вариант</h1>
            <button onClick={handleClicker}>Второй вариант</button>
            <h1>Третий вариант</h1>
            <button onClick={() => handleClickerWithParams('Это работает как передаемая функция в параметр onClick но ещё можно передевать в неё параметры!')}>Третий вариант вариант</button>
        </>
    )
}

export default ClickExample;