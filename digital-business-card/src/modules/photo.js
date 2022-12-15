import React from 'react';
import "../styles/photo.css"

const srcImg = require("../img/profile-picture.jpg")
export function Photo() {
  const marco = (
    <div className="photo--container">
      <img className = "photo--img" src={srcImg} alt="my face"/>
    </div>
  )
  return marco;
}
