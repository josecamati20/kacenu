import React from 'react'
import "./MyCard.css"

function MyCard() {
  return (
    <div className="wrapper">
    <div className="box">
      <i className="fas fa-quote-left quote"></i>
      <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
      <div className="content">
        <div className="info">
          <div className="name">Alex Smith</div>
          <div className="job">Designer | Developer</div>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </div>
        </div>
        <div className="image">
          <img src="/assets/img/gallery/user.png" alt="" />
        </div>
      </div>
    </div>
 
  </div>
  )
}

export default MyCard