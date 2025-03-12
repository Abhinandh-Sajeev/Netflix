import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import "./Row.css"
import { imageUrl,API_KEY } from '../../constants/constants';
import axios from '../../Axios';

const Row = (props) => {

const [card,setCard]=useState([])
const [urlId,setUrlId] =useState('')

useEffect(()=>{
  axios.get(props.url).then(response=>{
    
    setCard(response.data.results)
    
  }).catch(err=>{
    
  })
},[props.url])

const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};


const handilmovie =(id)=>{
  
 const response = axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-us`).then(response=>{
    if (response.data.results.length!==0) {
      setUrlId(response.data.results[0]?.key);
    }
      console.log(response);
    
  })
}


  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {card.map((item)=>
          <img key={item.id} onClick={()=>handilmovie(item.id)} src={`${imageUrl+item.backdrop_path
          }`} className={props.isSmall ? 'smallcardimg':'cardimg'} />
          
          )}
        
   
      </div>
      {urlId  &&  <YouTube opts={opts} videoId={urlId} />}
    </div>
  )
}

export default Row
