import logo from "../../images/primary-logo.svg";
import { Link } from "react-router-dom";
import "./Nav.css";
import ButtonTertiary from "./ButtonTertiary";
import ButtonSecondary from "./ButtonSecondary";

const Navbar = () => {
  let user = window.localStorage.getItem("token")
  console.log('user variable below this')
  console.log(user)
  console.log('user variable above this')

   if(!user){
  return (
   <nav className="nav">
      <div className="nav__container">
        <Link className="nav__link--logo" to="/">
          <img className="nav__logo" src={logo} alt="svg logo" />
        </Link>

        <div className="signin">
          <ButtonTertiary path={"/login"} text={"Log In"} />
        </div>
        <div className="signup">
          <ButtonSecondary path={"/register"} text={"Sign Up"} />
        </div>
      </div>
    </nav>)
   }else{
    return (
      <nav className="nav">
      <div className="nav__container">
        <Link className="nav__link--logo" to="/">
          <img className="nav__logo" src={logo} alt="svg logo" />
        </Link>
      </div>
      </nav>
   )
}}

export default Navbar;
