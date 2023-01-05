import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./Nav.css"


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="navbar__logo" src={logo} alt="svg logo" />
      </Link>
    </nav>
  );
};

export default Navbar;
