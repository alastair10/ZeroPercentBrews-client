import logo from "../../images/logo.svg";
import "./Nav.css"


const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="navbar__logo" src={logo} alt="svg logo" />
      {/* <div className="navbar__links">LINKS</div> */}
    </nav>
  );
};

export default Navbar;
