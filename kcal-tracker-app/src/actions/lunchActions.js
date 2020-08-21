import Axios from "axios";
import Cookie from "js-cookie";
import {ADD_LUNCH, UPDATE_LUNCH, REMOVE_LUNCH} from '../constants/constants';

const addToLunch = (productId) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get("http://localhost:5000/products/" + productId);
    dispatch({
      type: ADD_LUNCH, payload: {
        product: data._id,
        name: data.name,
        weight: data.weight,
        kcal: data.kcal,
        protein: data.protein,
        fats: data.fats,
        carbs: data.carbs,
      }
    });
    const { lList: { lunchList } } = getState();
    Cookie.set("lunchList", JSON.stringify(lunchList));

  } catch (error) {

  }
}

const updateLunch = (productId, q) => async (dispatch, getState) =>{
  try {
    const { data } = await Axios.get("http://localhost:5000/products/" + productId);
    dispatch({
      type: UPDATE_LUNCH, payload: {
        product: data._id,
        name: data.name,
        weight: q,
        kcal: data.kcal,
        protein: data.protein,
        fats: data.fats,
        carbs: data.carbs,
      }
    });
    const { lList: { lunchList } } = getState();
    Cookie.set("lunchList", JSON.stringify(lunchList));

  } catch (error) {

  }

}

const removeFromLunch = (productId) => (dispatch, getState) => {
  dispatch({ type: REMOVE_LUNCH, payload: productId });

  const { lList: { lunchList } } = getState();
  Cookie.set("lunchList", JSON.stringify(lunchList));
}

export { addToLunch, removeFromLunch, updateLunch }