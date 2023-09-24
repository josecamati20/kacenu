import React from 'react'
import "./Resource.css"
import CardResourse from '../CardResourse/CardResource'

function Resource() {
  return (
    <div className='resource' id="resources">
        <img src='/src/assets/img/illustrations/feature-bg.png' />
        <div className="resources">
            <h4 className="resources-title">Awesome apps features</h4>
             <CardResourse 
            url={'/src/assets/img/illustrations/fast-performance.png'} 
            title={"Fast performance"}
            text={"Get your blood tests delivered at home collect a sample from the news your blood tests."}
            color={"#F55767"}
            />

            <CardResourse 
            url={'/src/assets/img/illustrations/prototype.png'} 
            title={"Fast performance"}
            text={"Get your blood tests delivered at home collect a sample from the news your blood tests."}
            color={"#2500F9"}
            />

            <CardResourse 
            url={'/src/assets/img/illustrations/vector.png'} 
            title={"Fast performance"}
            text={"Get your blood tests delivered at home collect a sample from the news your blood tests."}
            color={"#40975F"}
            />
            
        </div>
    </div>
  )
}

export default Resource