import { ADD_LUNCH, UPDATE_LUNCH, REMOVE_LUNCH } from "../constants/constants";

function lunchReducer(state = { lunchList: []}, action) {
    switch (action.type) {
      case ADD_LUNCH:
        const item = action.payload;
        const product = state.lunchList.find(x => x.product === item.product);
        if (product) {
          return {
            lunchList:
              state.lunchList.map(x => x.product === product.product ? item : x)
          };
        }
        return { lunchList: [...state.lunchList, item] };
        case UPDATE_LUNCH:
          const item_upd = action.payload;
          const product_upd = state.lunchList.find(x => x.product === item_upd.product);
          if (product_upd) {
            return {
                lunchList:
                state.lunchList.map(x => x.product === product_upd.product ? item_upd : x)
            };
          }
        case REMOVE_LUNCH:
        return { lunchList: state.lunchList.filter(x => x.product !== action.payload) };
      default:
        return state
    }
  }
  
  export default  lunchReducer 
  