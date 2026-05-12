import React, { useEffect, useState } from "react";

function MouseTracker() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mouseMoveHandler = event => {
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    console.log("componentDidMount - подписка на события мыши");
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      console.log("componentWillUnmount - отписка от событий мыши");
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []); // Пустой массив — эффект выполнится один раз при монтировании

  useEffect(()=>{
    console.log(`Текущие координаты мыши: ${x}, ${y}`)
  },[x,y]);


  return (
    <div>
      <p>Координаты мыши: {x}, {y}</p>
    </div>
  );
}

function MouseTrackerWrapper() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button
                onClick={()=>setIsVisible(!isVisible)}
            >
                {isVisible ? 'Убрать трекер мыши' : 'Добавить трекер мыши'}
            </button>
            {isVisible && <MouseTracker />}
        </div>
    )
}

export default MouseTrackerWrapper;