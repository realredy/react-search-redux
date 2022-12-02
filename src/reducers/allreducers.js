import { combineReducers } from "redux";
 
  import cartReducer from "./cartreducer/cartReducer"; 
  import singleReducer from "./getsingle/singleReducer";
   import itemReducer from "./Itemscounts/itemReducer";

const allReducers = combineReducers({
      cart: cartReducer, 
    single: singleReducer,
    result: itemReducer
});

export default allReducers;