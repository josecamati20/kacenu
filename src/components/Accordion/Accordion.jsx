import { useState } from 'react';
import "./Accordion.css"

function Accord({title,text}) {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <div className='accord' onClick={()=> setIsClicked(prev => !prev)}>
       <div>
       <h4>{title}</h4>
       <img  src={isClicked  ? '/src/assets/img/icons/minus-sign.png' : '/src/assets/img/icons/plus.png' }/>
       </div>
       {isClicked &&  <p>{text}</p>
    }
       </div>
  );
}

export default Accord;