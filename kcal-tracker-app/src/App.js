import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import AddUserScreen from './screens/AddUserScreen';
import AddProductScreen from './screens/AddFoodScreen';
import FoodScreen from './screens/FoodScreen';
import EditFoodScreen from './screens/EditFoodScreen';
import MacroCalculatorScreen from './screens/CalculatorScreen';
import LoginScreen from './screens/LoginScreen';
import { useSelector, useDispatch } from 'react-redux';
import ListScreen from './screens/ListScreen';
import { logout } from './actions/userActions';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  const openMenu = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <BrowserRouter>
      <div className="grid-contaier">
        <header className="header">
          <div className='topnav' id='myTopnav'>
            <a href="/">Kcal-tracker-APP</a>
            <a>{userInfo && userInfo.isAdmin && (
              <Link to="/products">Add products</Link>)}
              <Link to="/macrocalculator">Calculator</Link>
              {userInfo && <Link to='/list'>My list</Link>}</a>
            <a>
              {userInfo ? (<div>
                <Link to='/' onClick={handleLogout}>Logout</Link>
                  <Link to='/profile'>Welcome {userInfo.username}</Link></div>
              ) : (
                  <div><Link to="/register">Register</Link>
                    <Link to="/login">Login</Link></div>
                )}
            </a>
            <a onClick={openMenu} className='icon'>&#9776;</a>
          </div>
        </header>
        <main className="main">
          <Route path='/edit/:id' component={EditFoodScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path="/register" component={AddUserScreen} />
          <Route path='/products' component={AddProductScreen} />
          <Route path='/macrocalculator' component={MacroCalculatorScreen} />
          <Route path='/list/:id' component={ListScreen} />
          <Route path='/list' component={ListScreen} />
          <Route path='/' exact component={FoodScreen} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
