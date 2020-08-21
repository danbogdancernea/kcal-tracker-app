import React from 'react';
import { removeFromCart, updateCart } from '../actions/snackActions';
import {removeFromBreakfast, updateBreakfast} from '../actions/breakfastActions';
import { useDispatch, useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import { removeFromLunch, updateLunch } from '../actions/lunchActions';
import {removeFromDiner, updateDiner} from '../actions/dinerActions';
function ListScreen(props) {

    const sList = useSelector(state => state.sList);
    const { snackList } = sList;

    const bList = useSelector(state => state.bList);
    const { breakfastList } = bList;

    const lList = useSelector(state => state.lList);
    const{ lunchList } = lList;

    const dList = useSelector(state => state.dList);
    const { dinerList } = dList; 

    const dispatch = useDispatch();

    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }
    const removeFromBreakfastHandler = (productId) =>{
        dispatch(removeFromBreakfast(productId));
    }
    const removeFromLunchHandler = (productId) =>{
        dispatch(removeFromLunch(productId));
    }
    const removeFromDinerHandler = (productId) =>{
        dispatch(removeFromDiner(productId));
    }

    return <div className="list-items">
                <h3>
                        Breakfast
                    </h3>
                <table className="list-table">
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
                    {   
                        breakfastList.map(item =>
                            <tbody key={item.id}>
                                <tr>
                                <td>{item.name}</td>
                                <td  key={item.id}>{item.weight}{<Popup  key={item.id} trigger={<button>Change</button>} ><input  key={item.id} onInput={(e) => dispatch(updateBreakfast(item.product,e.target.value))}></input></Popup>} </td>
                                <td>{item.weight / 100 * item.kcal}</td>
                                <td>{item.weight / 100 * item.protein}</td>
                                <td>{item.weight / 100 * item.fats}</td>
                                <td>{item.weight / 100 * item.carbs}</td>
                                <td><button type="button" className="button-rmv" onClick={() => removeFromBreakfastHandler(item.product)} >
                                    X
                    </button></td></tr>
                            </tbody>
                            
                        )}
                </table>
                <h3>
                        Lunch
                    </h3>
                <table className="list-table">
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
                    {   
                        lunchList.map(item =>
                            <tbody key={item.id}>
                                <tr>
                                <td>{item.name}</td>
                                <td  key={item.id}>{item.weight}{<Popup  key={item.id} trigger={<button>Change</button>} ><input  key={item.id} onInput={(e) => dispatch(updateLunch(item.product,e.target.value))}></input></Popup>} </td>
                                <td>{item.weight / 100 * item.kcal}</td>
                                <td>{item.weight / 100 * item.protein}</td>
                                <td>{item.weight / 100 * item.fats}</td>
                                <td>{item.weight / 100 * item.carbs}</td>
                                <td><button type="button" className="button-rmv" onClick={() => removeFromLunchHandler(item.product)} >
                                    X
                    </button></td></tr>
                            </tbody>
                            
                        )}
                </table>
                <h3>
                        Diner
                    </h3>
                <table className="list-table">
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
                    {   
                        dinerList.map(item =>
                            <tbody key={item.id}>
                                <tr>
                                <td>{item.name}</td>
                                <td  key={item.id}>{item.weight}{<Popup  key={item.id} trigger={<button>Change</button>} ><input  key={item.id} onInput={(e) => dispatch(updateDiner(item.product,e.target.value))}></input></Popup>} </td>
                                <td>{item.weight / 100 * item.kcal}</td>
                                <td>{item.weight / 100 * item.protein}</td>
                                <td>{item.weight / 100 * item.fats}</td>
                                <td>{item.weight / 100 * item.carbs}</td>
                                <td><button type="button" className="button-rmv" onClick={() => removeFromDinerHandler(item.product)} >
                                    X
                    </button></td></tr>
                            </tbody>
                            
                        )}
                </table>
                
                <h3>
                        Snacks
                    </h3>
                <table className="list-table">
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
                    {   
                        snackList.map(item =>
                            <tbody key={item.id}>
                                <tr>
                                <td>{item.name}</td>
                                <td  key={item.id}>{item.weight}{<Popup  key={item.id} trigger={<button>Change</button>} ><input  key={item.id} onInput={(e) => dispatch(updateCart(item.product,e.target.value))}></input></Popup>} </td>
                                <td>{item.weight / 100 * item.kcal}</td>
                                <td>{item.weight / 100 * item.protein}</td>
                                <td>{item.weight / 100 * item.fats}</td>
                                <td>{item.weight / 100 * item.carbs}</td>
                                <td><button type="button" className="button-rmv" onClick={() => removeFromCartHandler(item.product)} >
                                    X
                    </button></td></tr>
                            </tbody>
                            
                        )}
                </table>
        <div >
            <h3>
                Total:
            </h3>
            <table className='list-table'>
                <thead>
                    <tr>
                        <th>Kcal</th>
                        <th>Protein</th>
                        <th>Fats</th>
                        <th>Carbs</th>
                    </tr>
                </thead>
                <tbody>
                    <td>{snackList.reduce((a, c) => a + c.kcal*c.weight/100, 0) + breakfastList.reduce((b, d) => b + d.kcal * d.weight/100, 0) + lunchList.reduce((b, d) => b + d.kcal * d.weight/100, 0) + dinerList.reduce((b, d) => b + d.kcal * d.weight/100, 0)}</td>
                    <td>{snackList.reduce((a, c) => a + c.protein*c.weight/100 , 0) + breakfastList.reduce((b, d) => b + d.protein * d.weight/100, 0 + lunchList.reduce((b, d) => b + d.protein * d.weight/100, 0)) + dinerList.reduce((b, d) => b + d.protein * d.weight/100, 0)}</td>
                    <td>{snackList.reduce((a, c) => a + c.fats*c.weight/100, 0) + breakfastList.reduce((b, d) => b + d.fats * d.weight/100, 0) + lunchList.reduce((b, d) => b + d.fats * d.weight/100, 0) + dinerList.reduce((b, d) => b + d.fats * d.weight/100, 0)}</td>
                    <td>{snackList.reduce((a, c) => a + c.carbs*c.weight/100, 0) + breakfastList.reduce((b, d) => b + d.carbs * d.weight/100, 0) + lunchList.reduce((b, d) => b + d.carbs * d.weight/100, 0) + dinerList.reduce((b, d) => b + d.carbs * d.weight/100, 0)}</td>
                </tbody>
            </table>
        </div>

    </div>
}

export default ListScreen;
