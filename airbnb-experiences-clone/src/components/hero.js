import NavBar from "./navbar";

const grid = require("../img/photo-grid.png")
function Hero() {
  return (
    <div>
      <NavBar />
      <div className="hero--image-div">
        <img className="hero--image" src={grid} alt="grid"/>
      </div>
      <div className="hero--text-div">
        <h2>Online Experiences</h2>
        <p>Joing unique interactive activities led by one-of-a-kind
          hosts-all without leaving home</p>
      </div>
    </div>
  )
}

export default Hero;
