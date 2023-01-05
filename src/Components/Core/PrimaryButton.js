import "./PrimaryButton.css";
import { Link } from "react-router-dom";

const PrimeButton = ({id}) => {

  return (
    <div className="link">
      <Link to={`/beer/${id}`}>
      <button>
          More Info
        </button>
      </Link>
    </div>
  );
};

export default PrimeButton;
// const beerInfo = BeerContainer;
// const handleClick = () => {
//   console.log("YEAH BABY YEAH!")
