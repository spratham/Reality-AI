import React from 'react'
import './Page5Card.css'
const Page5Card = (props) => {
  return (
    <div className='card-wrapper'>
    <div className="img">{props.image}</div>
    <div className="line1"><center>{props.line1}</center></div>
    <div className="line2"><center>{props.line2}</center></div>
    </div>
  )
}

export default Page5Card;