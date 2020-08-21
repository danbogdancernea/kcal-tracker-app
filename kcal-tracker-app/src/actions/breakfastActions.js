import Axios from "axios";
import Cookie from "js-cookie";
import {ADD_BREAKFAST, REMOVE_BREAKFAST, UPDATE_BREAKFAST} from '../constants/constants';

const addToBreakfast = (productId) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get("http://localhost:5000/products/" + productId);
    dispatch({
      type: ADD_BREAKFAST, payload: {
        product: data._id,
        name: data.name,
        weight: data.weight,
        kcal: data.kcal,
        protein: data.protein,
        fats: data.fats,
        carbs: data.carbs,
      }
    });
    const { bList: { breakfastList } } = getState();
    Cookie.set("breakfastList", JSON.stringify(breakfastList));

  } catch (error) {

  }
}

const updateBreakfast = (productId, q) => async (dispatch, getState) =>{
  try {
    const { data } = await Axios.get("http://localhost:5000/products/" + productId);
    dispatch({
      type: UPDATE_BREAKFAST, payload: {
        product: data._id,
        name: data.name,
        weight: q,
        kcal: data.kcal,
        protein: data.protein,
        fats: data.fats,
        carbs: data.carbs,
      }
    });
    const { bList: { breakfastList } } = getState();
    Cookie.set("breakfastList", JSON.stringify(breakfastList));

  } catch (error) {

  }

}

const removeFromBreakfast = (productId) => (dispatch, getState) => {
  dispatch({ type: REMOVE_BREAKFAST, payload: productId });

  const { bList: { breakfastList } } = getState();
  Cookie.set("breakfastList", JSON.stringify(breakfastList));
}

export { addToBreakfast, removeFromBreakfast, updateBreakfast }