import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; 

import storagesReducers from './multiples/storageReducers';

const Store = createStore( storagesReducers, applyMiddleware(thunk));
export default Store; 