import {SAVEDATA, DATA_SUCESS, DATA_FAIL} from './cartType';

export const startSaving = () => {
    return {
        type: SAVEDATA
    } 
} 

export const saveDataSucess = (allUser) => {
    return {
        type: DATA_SUCESS,
        payload: allUser
    } 
} 

export const saveError = (error) => {
    return {
        type: DATA_FAIL,
        payload: error
    } 
} 

export const savedata = (body) => { debugger
    
    return (dispatch) =>{ 
        dispatch(startSaving()) 

        let URLTOFECH  = `${process.env.REACT_APP_POPCADS_COLLECTION}/cart`;
         
          console.log("🚀 ~ file: cartAction.js:30 ~ return ~ URLTOFECH", URLTOFECH)
          const options = {
            method: 'post',
            headers: {'Access-Control-Allow-Origin': '*'},
            body: body
          };
          


          try {   
            fetch( URLTOFECH, options)  
           .then(response  =>  response.json() )
           .then(getData => {    
             const status = getData.status.http_code 
              const data =  getData.contents 
            status === 200 ?  dispatch(saveDataSucess(data)) : dispatch(saveError({msj:"Error feching data"}))
           }) 
           } catch (err) {
           console.log(err);
           dispatch(saveError(err))
         }  
    }
}