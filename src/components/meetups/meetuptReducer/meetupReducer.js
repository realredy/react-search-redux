import {ADD_TO_FAVORITE, DELETTE_FAVORITE} from './meetupType';
import addFavoriteToJson from '../../../utils/addFavotiteToJson';
const initialState = {
    added: 0
}


const meetupReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_FAVORITE:
            return {
                ...state, 
                added: state.added + addFavoriteToJson(action.payload)
            }
            break;
    
        default:
           return state;
            break;
    }

}

export default meetupReducer;