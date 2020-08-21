import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {addToCart} from '../actions/snackActions';
import { addToBreakfast } from '../actions/breakfastActions';
import { addToLunch } from '../actions/lunchActions';
import { addToDiner } from '../actions/dinerActions';
import Popup from 'reactjs-popup';


function Product (props){
    
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
  
    
    useEffect(() => {
        if (props.product.id) {
          dispatch(addToCart(props.product.id));
        }
      }, []);
      useEffect(() => {
        if (props.product.id) {
          dispatch(addToBreakfast(props.product.id));
        }
      }, []);
      useEffect(() => {
        if (props.product.id) {
          dispatch(addToLunch(props.product.id));
        }
      }, []);
      useEffect(() => {
        if (props.product.id) {
          dispatch(addToDiner(props.product.id));
        }
      }, []);

     
    return <tr>
        <td>{props.product.name}</td>
        <td>{props.product.weight}</td>
        <td>{props.product.kcal}</td>
        <td>{props.product.protein}</td>
        <td>{props.product.fats}</td>
        <td>{props.product.carbs}</td>
        {userInfo && !userInfo.isAdmin && (<Popup position='left center' trigger={<button className="btn-add-item" >+</button>}><button className="btn-add-item-popup"  onClick={()=>dispatch(addToBreakfast(props.product._id))}>BREAKFAST</button>
        <button className="btn-add-item-popup"  onClick={()=>dispatch(addToLunch(props.product._id))}>LUNCH</button>
        <button className="btn-add-item-popup"  onClick={()=>dispatch(addToDiner(props.product._id))}>DINER</button>
        <button className="btn-add-item-popup"  onClick={()=>dispatch(addToCart(props.product._id))}>SNACK</button></Popup>)}
        {!userInfo && <Link to='/login' className="btn-add-item">+</Link>}
        {userInfo && userInfo.isAdmin && (
        <td>
           <div className="edit-btn">
               <a>
           <Link to={"/edit/"+props.product._id}>EDIT</Link>
           </a>
            </div>
            <div className="delete-btn">
            <a href="/" onClick = { () => { props.deleteProduct(props.product._id) } }>DELETE</a>   
            </div>
        </td>)}
        
        
    </tr>
}

export default class FoodScreen extends Component{
    constructor(props){
        super(props);

        this.deleteProduct = this.deleteProduct.bind(this);
        this.state = {products: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/products/')
          .then(res => {
            this.setState({ products: res.data })
          })
          .catch((err) => {
            console.log(err);
        })
    }

    deleteProduct(id) {
        axios.delete('http://localhost:5000/products/'+id)
          .then(res => { console.log(res.data)});
    
        this.setState({
          products: this.state.products.filter(el => el._id !== id)
        })
    }

    productsList() {
        return this.state.products.map(currentproduct => {
          return <Product product={currentproduct} deleteProduct={this.deleteProduct} key={currentproduct._id}/>;
        })
    }

    render(){
    return(
        <div className="product-list">
            <h3>Current product list</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Weight (grams)</th>
                        <th>Kcal</th>
                        <th>Protein</th>
                        <th>Fats</th>
                        <th>Carbs</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="tbody-food-screen">
                    {this.productsList()}
                </tbody>
            </table>
                
        </div>
    )
    }
}
