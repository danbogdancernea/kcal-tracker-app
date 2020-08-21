import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {
  userSigninReducer,
  userRegisterReducer,
} from './reducers/userReducers';
import snackReducer from './reducers/snackReducers';
import breakfastReducer from './reducers/breakfastReducers';
import lunchReducer from './reducers/lunchReducers';
import dinerReducer from './reducers/dinerReducers';

const snackList = Cookie.getJSON('snackList') || [];
const breakfastList = Cookie.getJSON('breakfastList') || [];
const lunchList = Cookie.getJSON('lunchList') || [];
const dinerList = Cookie.getJSON('dinerList') || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
  sList: {snackList},
  bList: {breakfastList},
  lList: {lunchList},
  dList: {dinerList},
  userSignin: { userInfo },
};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  sList: snackReducer,
  bList: breakfastReducer,
  lList: lunchReducer,
  dList: dinerReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;