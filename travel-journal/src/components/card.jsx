import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function Card(props) {
  return (
    <div className="card">
      <div className="card--image">
        <img src={require(`../img/${props.item.cardImage}`)} alt="place" />
      </div>
      <div className="card--content">
        <p>
          <FontAwesomeIcon icon={solid('location-dot')} className="location-dot"/>
          <span className="card--country"> {props.item.location}</span>
          <a href={props.item.googleMapsLocation}>View on Google Maps</a>
        </p>
        <h2>{props.item.title}</h2>
        <p>{props.item.from} - {props.item.to}</p>
        <p>{props.item.description}</p>
      </div>
    </div>
  
  )
}

export default Card;
