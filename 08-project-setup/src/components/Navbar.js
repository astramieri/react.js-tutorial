import react_logo from '../images/react_logo.png';

function Navbar() {
  return (
    <nav>
      <img src={react_logo} alt="logo" className="nav-logo"></img>
      <h3 className="nav-title">React Facts</h3>
      <h4 className="nav-text">React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;
