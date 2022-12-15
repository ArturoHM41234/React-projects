import React from 'react';
import "../styles/cardinfo.css"

function CardInfo() {
  const cardInfo = (
    <div className="cardinfo--container">
      <h1 className="cardinfo--title">About</h1>
      <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>

      <h1 className="cardinfo--title">Interests</h1>
      <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
    </div>
  )
  return cardInfo;
}

export { CardInfo }
