import Axios from "axios";
import Cookie from "js-cookie";
import {UPDATE_DINER, REMOVE_DINER, ADD_DINER} from '../constants/constants';

const addToDiner = (productId) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get("http://localhost:5000/products/" + productId);
    dispatch({
      type: ADD_DINER, payload: {
        product: data._id,
        name: data.name,
        weight: data.weight,
        kcal: data.kcal,
        protein: data.protein,
        fats: data.fats,
        carbs: data.carbs,
      }
    });
    const { dList: { dinerList } } = getState();
    Cookie.set("dinerList", JSON.stringify(dinerList));

  } catch (error) {

  }
}

const updateDiner = (productId, q) => async (dispatch, getState) =>{
  try {
    const { data } = await Axios.get("http://localhost:5000/products/" + productId);
    dispatch({
      type: UPDATE_DINER, payload: {
        product: data._id,
        name: data.name,
        weight: q,
        kcal: data.kcal,
        protein: data.protein,
        fats: data.fats,
        carbs: data.carbs,
      }
    });
    const { dList: { dinerList } } = getState();
    Cookie.set("dinerList", JSON.stringify(dinerList));

  } catch (error) {

  }

}

const removeFromDiner = (productId) => (dispatch, getState) => {
  dispatch({ type: REMOVE_DINER, payload: productId });

  const { dList: { dinerList } } = getState();
  Cookie.set("dinerList", JSON.stringify(dinerList));
}

export { addToDiner, removeFromDiner, updateDiner }