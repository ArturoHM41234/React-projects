import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "../styles/footer.css";
import { faTwitter, faFacebook, faInstagram, faGithub} from "@fortawesome/free-brands-svg-icons";


function Footer() {
  const pie = (
    <footer>
      <button><FontAwesomeIcon className="twitter-icon" icon={faTwitter} /></button>
      <button><FontAwesomeIcon className="facebook-icon" icon={ faFacebook } /></button>
      <button><FontAwesomeIcon className="instagram-icon" icon={ faInstagram } /></button>
      <button><FontAwesomeIcon className="linkedIn-icon" icon={ faGithub } /></button>
    </footer>
  )
  return pie;
}

export { Footer }
