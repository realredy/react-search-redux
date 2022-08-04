import { createStore, applyMidelware } from 'redux'; 
import thunk from 'redux-thunk'; 

import storagesReducers from './multiples/storageReducers';

const Store = createStore( storagesReducers, applyMidelware(thunk));
export default Store; 