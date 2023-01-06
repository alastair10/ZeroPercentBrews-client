import { useState } from 'react'; 

const register = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }
  
  return ( 
    <form onSubmit={handleSubmit}>
      <label>Username
      <input
          placeholder='e.g. BeerMaster4000'
          type='text'
          name='username'
          value={inputs.username}
          onChange={handleChange}
        />
      </label>
      <label>Email
      <input
          placeholder='e.g. name@address.com'
          type='email'
          name='email'
          value={inputs.email}
          onChange={handleChange}
        />
      </label>
      <label>Password
      <input
          placeholder='make a secure password'
          type='password'
          name='password'
          value={inputs.password}
          onChange={handleChange}
        />
        </label>
      <input type="Sign Up" />
    </form>
  );
}
 
export default register;