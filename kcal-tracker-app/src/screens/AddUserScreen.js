import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function AddUserScreen(props){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userRegister = useSelector(state => state.userRegister);
    const {userInfo} = userRegister;
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (userInfo) {
        props.history.push('/');
      }
      return () => {
        //
      };
    }, [userInfo]);

    const registerSubmit = (e) => {
        e.preventDefault();
        dispatch(register(username, email, password));
    }

    return <div className="add-user">
        <h3>Registration</h3>
    <form onSubmit={registerSubmit} >
      <div className="add-user-container">       
          <label htmlFor="username">
            Username
          </label>
          <input type="username" name="username" id="username" onChange={(e) => setUsername(e.target.value)}>
          </input>
        </div>
        <div className="add-user-container">
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </div>
        <div className="add-user-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </div>
        <div className="add-user-btn">
          <button type="submit">Register</button>
        </div>
        <div className="login-redirect">
        <li>
          Already have an account?
          <Link to='/login'> Login</Link>
        </li>
        </div>

    </form>
  </div>
}
export default AddUserScreen;

