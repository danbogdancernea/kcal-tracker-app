import Axios from "axios";
import Cookie from "js-cookie";
import {REMOVE_SNACK, UPDATE_SNACK, ADD_SNACK} from '../constants/constants';

const addToCart = (productId) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get("http://localhost:5000/products/" + productId);
    dispatch({
      type: ADD_SNACK, payload: {
        product: data._id,
        name: data.name,
        weight: data.weight,
        kcal: data.kcal,
        protein: data.protein,
        fats: data.fats,
        carbs: data.carbs,
      }
    });
    const { sList: { snackList } } = getState();
    Cookie.set("snackList", JSON.stringify(snackList));

  } catch (error) {

  }
}

const updateCart = (productId, q) => async (dispatch, getState) =>{
  try {
    const { data } = await Axios.get("http://localhost:5000/products/" + productId);
    dispatch({
      type: UPDATE_SNACK, payload: {
        product: data._id,
        name: data.name,
        weight: q,
        kcal: data.kcal,
        protein: data.protein,
        fats: data.fats,
        carbs: data.carbs,
      }
    });
    const { sList: { snackList } } = getState();
    Cookie.set("snackList", JSON.stringify(snackList));

  } catch (error) {

  }

}

const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: REMOVE_SNACK, payload: productId });

  const { sList: { snackList } } = getState();
  Cookie.set("snackList", JSON.stringify(snackList));
}

export { addToCart, removeFromCart, updateCart }