import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import "./Banner.css"
import axios from '../../Axios';
import {API_KEY , imageUrl} from '../../constants/constants'


const Banner = () => {

  const[movie,setMovie]=useState()

useEffect(()=>{
 axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
  console.log(response.data.results);
  setMovie(response.data.results[0])
  
 })

},[])

  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""}) `}}>
      <div className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title || movie.name : "Loading..."}</h1>
            <div className='buttons'>
                <Button className='button'>Play</Button>
                <Button className='button'>My List</Button>
            </div>
            <h1 className='description'>{movie ? movie.overview: "Loading......"}</h1>
        </div>
        <div className="fade_bottom"></div>
      </div>
    </div>
  )
}

export default Banner
