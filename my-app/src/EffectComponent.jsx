import React, {useEffect,useState,useLayoutEffect, useRef} from 'react'

function EffectComponent () {
    const [size,setSize] = useState(100);
    const boxRef = useRef(null);

    useEffect(()=>{
        const box = boxRef.current;
        if (box) {
            const {width, height} = box.getBoundingClientRect();
            console.log('[useEffect] размеры box: ', {width, height});
        }
    },[size]);

    return (
    <div>
        <h3>
            Пример UseEffect
        </h3>
        <div 
            ref={boxRef}
            style={{
                width: size,
                height: size,
                transition: 'all 0.3s',
                margin: '10px',
                backgroundColor: 'red'
            }}
        >
        </div>
        <button onClick={()=>setSize(prev => prev + 20)}>Увеличить размеры </button>
    </div>
    )
}

function LayoutEffectComponent () {
    const [size,setSize] = useState(100);
    const boxRef = useRef(null);

    useLayoutEffect(()=>{
        const box = boxRef.current;
        if (box) {
            const {width, height} = box.getBoundingClientRect();
            console.log('[useLayoutEffect] размеры box: ', {width, height});
        }
    },[size]);

    return (
    <div>
        <h3>
            Пример UseLayoutEffect
        </h3>
        <div 
            ref={boxRef}
            style={{
                width: size,
                height: size,
                transition: 'all 0.3s',
                margin: '10px',
                backgroundColor: 'green'
            }}
        >
        </div>
        <button onClick={()=>setSize(prev => prev + 20)}>Увеличить размеры </button>
    </div>
    )
}

export default function ExampleOfLayoutAndSimpleEffect() {
    return (
        <div
            style={{
                padding: '20px',
            }}>
            <EffectComponent />
            <LayoutEffectComponent />
        </div>
    )
};