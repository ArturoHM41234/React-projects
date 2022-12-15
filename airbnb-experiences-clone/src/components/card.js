import Star from "./star-icon";

function Card(props) {
  return (
    <div className="card">
      <div className="card--image">
    <div className="card--status-item">{props.item.status > 0 ? "ONLINE" : "SOLDOUT"}</div>
    <img src={require(`../img/${props.item.coverImg}`)} alt="card background"/>
      </div>
      <p className="card--text card--score">
        <Star color="#FE395C"/>{props.item.stats.rating.toFixed(1)}
        <span> ({props.item.stats.reviewCount})</span>
        <span> ・ {props.item.location}</span>
      </p>
      <p className="card--text">{props.item.title}</p>
      <p className="card--text"><strong>{props.item.price}</strong> / person</p>
    </div>
  )
}

export default Card;
