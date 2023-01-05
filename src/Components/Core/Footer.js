import footer from "../../images/footer.svg";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <Link to="/">
        <img src={footer} alt="svg logo" />
      </Link>
    </div>
  );
};

export default Footer;
