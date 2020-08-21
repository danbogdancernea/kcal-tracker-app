import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';

function LoginScreen(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            props.history.push('/');
        }
        return () => {
            //
        };
    }, [userInfo]);

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(username, password));

    }
    return <div className="login-user">
        <h3>Login</h3>
        <form onSubmit={loginSubmit} >
            <div className="login-user-container">
                <label htmlFor="username">Username</label>
                <input type="username" name="username" id="username" onChange={(e) => setUsername(e.target.value)}>
                </input>
            </div>
            <div className="login-user-container">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                </input>
            </div>
            <div className="login-user-container">
                <button type="submit">Login</button>
            </div>
            <div className="login-redirect">
                <li>
                    Don't have an account?
                </li>
                <li>
                    <Link to='/register'>Create your account</Link>
                </li>
            </div>
        </form>
    </div>
}
export default LoginScreen;

