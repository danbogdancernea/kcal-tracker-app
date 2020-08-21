import axios from "axios";
import cookie from 'js-cookie';
import {USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_REGISTER_FAIL,USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_LOGOUT} from '../constants/constants'

const signin = (username, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { username, password } });
  try {
    const { data } = await axios.post("http://localhost:5000/users/signin", { username, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
}

const register = (username, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { username, email, password } });
  try {
    const { data } = await axios.post("http://localhost:5000/users/add", { username, email, password });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
}

const logout = () => (dispatch) => {
  cookie.remove("userInfo");
  dispatch({ type: USER_LOGOUT })
}

export { signin, register, logout };
