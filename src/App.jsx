import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/banner/banner'
import Row from './Components/cards/Row'
import {actions,originals} from './Url'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Banner/>
     <Row url={originals} title='Netflix Originals' /> 
     <Row url={actions} title='Actions' isSmall /> 
     <Row url={actions} title='Actions' isSmall /> 
    </>
  )
}

export default App
