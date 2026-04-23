import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MyButton from './Button'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyButton label={123} onClick={()=>{console.log("123");}}  />
      <MyButton label={123} onClick={()=>{}}  />

      <Card name={"Наименование 1"} color={"red"} status={"В наличие"} count={5}/>
      <Card name={"Наименование 2"} color={"green"} status={"Отсутствует"} count={5}/>

    </>
  )
}

export default App
