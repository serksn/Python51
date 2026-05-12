import { useState, useEffect } from 'react'
import Boots1 from './assets/boots1.png'
import Boots2 from './assets/boots2.webp'
import './App.css'
import Card from './Card'
import Header from './Header'
import ClickExample from './Clicker'
import ExampleOfLayoutAndSimpleEffect from './EffectComponent'
import NewClicker from './NewClicker'

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

  console.log(products);

  const [count, setCount] = useState(0);

  return (
    <>
      <NewClicker />
      <Header />
      <Card name={"Кроссовки белые"} image={Boots1} price={20000} count={5000}/>
      <Card name={"Наименование крассные"} image={Boots2} price={30000}/>

    </>
  )
}

export default App;
