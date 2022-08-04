import { combineReducers } from 'redux'; 
import meetupReducer from '../../components/meetups/meetuptReducer/meetupReducer';
const storagesReducers = combineReducers({
    meetupReducer: meetupReducer
}); 

export default storagesReducers;