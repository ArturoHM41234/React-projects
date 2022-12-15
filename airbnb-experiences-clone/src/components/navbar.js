const imgSrc = require("../img/airbnb-logo.png");

function NavBar() {
  return (
    <nav className="navBar">
      <img className="nav--icon"src={imgSrc} alt="logo" />
    </nav>
  )
}

export default NavBar;
