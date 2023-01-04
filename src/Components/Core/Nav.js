

const Navbar = () => {
  return (
    <div>
     
      <nav className="navbar">
      <img src="./download.jpg" alt="svg logo" />
       <div className="links">
        <a href="/login" style={{
          color: "#1E6A9C",
          backgroundColor: "white",
          borderRadius: '4px',
          
        }}>Log in</a>
       
        <a href="/signup" style={{
          color: "white",
          backgroundColor: "#1E6A9C",
          borderRadius: '4px'
        }}>Sign Up</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
