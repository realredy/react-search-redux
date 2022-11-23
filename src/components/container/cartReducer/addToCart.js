import {ADD_TO_CART, 
    ASC_DEC, 
    ADD_TO_CART_FROM_LIST, 
    SELECT_ITEMS_FROM_CATEGORYS,
    CLEAR_CART,
    SET_PAGINATION} from './cartType';

const addToCart = (itemToAdd) => {
    // console.log(itemToAdd)
    return {
        type: ADD_TO_CART,
        payload: itemToAdd
    }
} 
const addToCartFromList = (itemToAdd) => {
    //  console.log(itemToAdd)
    return {
        type: ADD_TO_CART_FROM_LIST,
        payload: itemToAdd
    }
} 

const setAscd = (asc_desc) => {
    // console.log('setAscd:::',asc_desc)
    return {
        type: ASC_DEC,
        payload: asc_desc
    }
} 
const selectItemsFromCategorys = (listOfCategorysSelected) => {
    // console.log('selectItemsFromCategorys:::',listOfCategorysSelected)
    return {
        type: SELECT_ITEMS_FROM_CATEGORYS,
        payload: listOfCategorysSelected
    }
} 
const emptyCartList = () => {
    return {type: CLEAR_CART}
}

const setPagination = (page) => {

    return {
        type: SET_PAGINATION,
        payload: page
    }
}

export {addToCart, addToCartFromList, setAscd, selectItemsFromCategorys, emptyCartList, setPagination}