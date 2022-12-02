import {GET_SINGLE, DATA_SUCESS, DATA_FAIL} from './singleType';

export const fechData = () => {
    return {
        type: GET_SINGLE
    } 
} 

export const fechDataSucess = (allUser) => {
    return {
        type: DATA_SUCESS,
        payload: allUser
    } 
} 

export const fechDataError = (error) => {
    return {
        type: DATA_FAIL,
        payload: error
    } 
} 

export const getSingleData = (id) => { 
    return (dispatch) =>{
        dispatch(fechData()) 

        let URLTOFECH  = `${process.env.REACT_APP_POPCADS_COLLECTION}/`+id;
        
        const options = {
            method: 'GET',
            headers: {
              'Access-Control-Allow-Origin': '*'
             } 
          };

          try {  
            fetch( URLTOFECH, options)
           .then(response  =>  response.json() )
           .then(getData => {   
             const status = getData.status.http_code; 
              const data =  getData.contents;  
              status === 200 ?  dispatch(fechDataSucess(data)) : dispatch(fechDataError({msj:"Error feching data"}))
           }) 
           } catch (err) {
           console.log(err);
           dispatch(fechDataError(err))
         }  
    }
}