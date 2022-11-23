import {
    ADD_TO_CART,
    ASC_DEC, ADD_TO_CART_FROM_LIST,
    SELECT_ITEMS_FROM_CATEGORYS,
    CLEAR_CART,
    SET_PAGINATION
} from './cartType';
import sendInfoToCart from '../../../utils/sendInfoToCart';
import modifyListOfItems from '../../../utils/modifyListOfItems';
import setFetchParameterJson from '../../../utils/cartListItemsAdded/fetchPatamethers.json';
import setFetchParameter from '../../../utils/setFetchParams';
import clearAllItemsInCart from '../../../utils/clearAllItemsInCart';
import filterPageToPaginate from '../../../utils/filterPageToPaginate';

const initialState = {
    added: [],
    parameters: setFetchParameterJson,
    listOtItem: setFetchParameterJson,
    page: "?page=1"

}


const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                added: sendInfoToCart(action.payload)
            }
        case ASC_DEC:
            return {
                ...state,
                parameters: setFetchParameter(action.payload, state.parameters)
            }
        case ADD_TO_CART_FROM_LIST:
            return {
                ...state,
                added: sendInfoToCart(action.payload)
            }

        case SELECT_ITEMS_FROM_CATEGORYS:
            return {
                ...state,
                parameters: modifyListOfItems(action.payload, state.listOtItem)
            }

        case CLEAR_CART:
            return {
                ...state,
                added: clearAllItemsInCart(state.added)
            }
 
            case SET_PAGINATION:
                return {
                    ...state,
                    page: filterPageToPaginate(action.payload)
                }
            
        default:
            return state;
            break;
    }

}

export default cartReducer;