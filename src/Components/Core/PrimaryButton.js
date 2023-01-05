import "./PrimaryButton.css";

const PrimeButton = () => {
  const handleClick = () => {
    console.log("YEAH BABY YEAH!");
    
  };
  return (
    <>
      <div className="link">
        <button onClick={handleClick}>More Info</button>
      </div>
    </>
  );
};

export default PrimeButton;
