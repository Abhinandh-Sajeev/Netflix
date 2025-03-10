import React from 'react'
import Button from 'react-bootstrap/Button';
import "./Banner.css"

const Banner = () => {
  return (
    <div>
      <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='buttons'>
                <Button className='button'>Play</Button>
                <Button className='button'>My List</Button>
            </div>
            <h1 className='description'>dfgsudhbnjfgbuhnij</h1>
        </div>
        <div className="fade_bottom"></div>
      </div>
    </div>
  )
}

export default Banner
