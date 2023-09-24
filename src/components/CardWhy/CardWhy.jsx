import React from 'react'
import "./CardWhy.css"

function CardWhy({url, title , text}) {
  return (
    <div className='cardWhy'>
       <img src={url} />
       <h6 className="cardWhy-title" >{title}</h6>
       <p>{text}</p>
    </div>
  )
}

export default CardWhy