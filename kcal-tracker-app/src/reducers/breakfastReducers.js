import { ADD_BREAKFAST, UPDATE_BREAKFAST, REMOVE_BREAKFAST } from "../constants/constants";

function breakfastReducer(state = { breakfastList: []}, action) {
    switch (action.type) {
      case ADD_BREAKFAST:
        const item = action.payload;
        const product = state.breakfastList.find(x => x.product === item.product);
        if (product) {
          return {
            breakfastList:
              state.breakfastList.map(x => x.product === product.product ? item : x)
          };
        }
        return { breakfastList: [...state.breakfastList, item] };
        case UPDATE_BREAKFAST:
          const item_upd = action.payload;
          const product_upd = state.breakfastList.find(x => x.product === item_upd.product);
          if (product_upd) {
            return {
              breakfastList:
                state.breakfastList.map(x => x.product === product_upd.product ? item_upd : x)
            };
          }
        case REMOVE_BREAKFAST:
        return { breakfastList: state.breakfastList.filter(x => x.product !== action.payload) };
      default:
        return state
    }
  }
  
  export default  breakfastReducer 
  