import { useState, useEffect, useCallback } from 'react'
import Boots1 from './assets/boots1.png'
import Boots2 from './assets/boots2.webp'
import './css/App.css'
import Card from './Card'
import Header from './Header'
import ClickExample from './Clicker'
import ExampleOfLayoutAndSimpleEffect from './EffectComponent'
import NewClicker from './NewClicker'
import { CounterButton, CounterDisplay } from './CounterButton'

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("http://localhost:8000/products");
    const data = await response.json();
    setProducts(data);
  }

  useEffect(()=>{
    getProducts();
  },[]);

  const [value, setValue] = useState(0);

  const handleIncrease = useCallback(() => setValue(prev=>prev+1), []);

  const handleDecrease = useCallback(() => setValue(prev=>prev-1), []);

  <CounterButton name={"увеличить"} onClick={()=>{}}/>


  return (
    <>

      <CounterButton name={"увеличить"} onClick={handleIncrease}/>
      <CounterButton name={"уменьшить"} onClick={handleDecrease}/>

      <CounterDisplay value={value} />
      
      <NewClicker />
      <Header />
      <ul className="cardList">
          {products.map(product => (
            <li>
              <Card {...product} />
            </li>
          ))}
      </ul>
    </>
  )
}

export default App;
