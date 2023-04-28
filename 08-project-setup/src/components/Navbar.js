import react_logo from '../images/react_logo.png';

function Navbar() {
  return (
    <nav className="Navbar">
      <img src={react_logo} alt="logo" width="60px"></img>
      <h3>React Facts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;
