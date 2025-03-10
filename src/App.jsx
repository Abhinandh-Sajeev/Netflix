import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/banner/banner'
import Row from './Components/cards/Row'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Banner/>
     <Row/> 
    </>
  )
}

export default App
