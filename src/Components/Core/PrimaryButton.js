import "./PrimaryButton.css";
import BeerContainer from "../Beer/BeerContainer";
import { Link } from "react-router-dom";

const PrimeButton = () => {
  const beer = BeerContainer;
  console.log(beer._id);

  return (
    <div className="link">
      <Link to={beer._id}>
        <button> More Info </button>
      </Link>
    </div>
  );
};

export default PrimeButton;
// const beerInfo = BeerContainer;
// const handleClick = () => {
//   console.log("YEAH BABY YEAH!")
