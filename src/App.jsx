import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/banner/banner'
import Row from './Components/cards/Row'
import {actions,originals,trending,ComedyMovies,HorrorMovies,RomanceMovies} from './Url'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Banner/>
     <Row url={originals} title='Netflix Originals'/> 
     <Row url={trending} title='Trending Movies'/> 
    <Row url={ComedyMovies} title='Comedy Movies' isSmall /> 
     <Row url={actions} title='Actions Movies'/> 
     <Row url={HorrorMovies} title='Horror Movies' isSmall /> 
     <Row url={RomanceMovies} title='Romance Movies'/> 
     
     
    </>
  )
}

export default App
