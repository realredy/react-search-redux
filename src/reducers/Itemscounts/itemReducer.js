import COUNT_RESULTS from './itemsType';
const initialState = {
    actualCount : 0
}
 
const itemReducer = (state = initialState, action) => { 
  
    switch(action.type){
        case COUNT_RESULTS :
        return { 
            ...state,
            actualCount: state.actualCount = action.payload
        }
       default : 
         return state; 
    }
}

export default itemReducer