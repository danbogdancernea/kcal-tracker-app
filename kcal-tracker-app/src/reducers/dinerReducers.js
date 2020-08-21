import { REMOVE_DINER, UPDATE_DINER, ADD_DINER } from "../constants/constants";

function dinerReducer(state = { dinerList: []}, action) {
    switch (action.type) {
      case ADD_DINER:
        const item = action.payload;
        const product = state.dinerList.find(x => x.product === item.product);
        if (product) {
          return {
            dinerList:
              state.dinerList.map(x => x.product === product.product ? item : x)
          };
        }
        return { dinerList: [...state.dinerList, item] };
        case UPDATE_DINER:
          const item_upd = action.payload;
          const product_upd = state.dinerList.find(x => x.product === item_upd.product);
          if (product_upd) {
            return {
                dinerList:
                state.dinerList.map(x => x.product === product_upd.product ? item_upd : x)
            };
          }
        case REMOVE_DINER:
        return { dinerList: state.dinerList.filter(x => x.product !== action.payload) };
      default:
        return state
    }
  }
  
  export default  dinerReducer 
  