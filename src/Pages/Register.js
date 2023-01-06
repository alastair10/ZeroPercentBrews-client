const register = () => {
  return ( 
    <form className="register-form">
      <label>Username</label>
      <input
          placeholder='e.g. BeerMaster4000'
          id='username'
          type='text'
          value={username}
          onChange={}
        />
      <label>Email</label>
      <input
          placeholder='e.g. name@address.com'
          id='email'
          type='text'
          value={email}
          onChange={}
        />
      <label>Password</label>
      <input
          placeholder='make a secure password'
          id='password'
          type='password'
          value={password}
          onChange={}
        />
      <button type="submit" onClick={}>Sign Up</button>
    </form>
  );
}
 
export default register;