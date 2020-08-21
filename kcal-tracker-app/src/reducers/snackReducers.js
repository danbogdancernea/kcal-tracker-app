import { ADD_SNACK, UPDATE_SNACK, REMOVE_SNACK } from "../constants/constants";


function snackReducer(state = { snackList: []}, action) {
    switch (action.type) {
      case ADD_SNACK:
        const item = action.payload;
        const product = state.snackList.find(x => x.product === item.product);
        if (product) {
          return {
            snackList:
              state.snackList.map(x => x.product === product.product ? item : x)
          };
        }
        return { snackList: [...state.snackList, item] };
        case UPDATE_SNACK:
          const item_upd = action.payload;
          const product_upd = state.snackList.find(x => x.product === item_upd.product);
          if (product_upd) {
            return {
              snackList:
                state.snackList.map(x => x.product === product_upd.product ? item_upd : x)
            };
          }
        case REMOVE_SNACK:
        return { snackList: state.snackList.filter(x => x.product !== action.payload) };
      default:
        return state
    }
  }
  
  export default  snackReducer 
  