import { combineReducers } from 'redux'; 
import cartReducer from '../../components/container/cartReducer/cartReducer'; 

const storagesReducers = combineReducers({  
    cartReducer:  cartReducer,
}); 

export default storagesReducers;