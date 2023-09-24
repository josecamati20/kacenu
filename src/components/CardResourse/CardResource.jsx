import React from 'react'
import "./CardResource.css"

function CardResource({url , title, text, color}) {
  return (
    <div className='cardResource'>
       <img src={url} />
        <div className="cardResource-about">
            <h6 className="cardResourse-title" style={{color:`${color}`}} >{title}</h6>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default CardResource