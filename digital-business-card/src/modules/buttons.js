import React from 'react';
import "../styles/buttons.css"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const mail = <FontAwesomeIcon icon={faEnvelope}/>
const linkedIn = <FontAwesomeIcon icon={faLinkedin} />

function CardButtons() {
  const cardButtons = (
    <div className="buttons-container">
      <button className="buttons button--email">{mail} Email</button>
      <button className="buttons button--linkedIn">{linkedIn} LinkedIn</button>
    </div>)
    return cardButtons;
}

export { CardButtons }
