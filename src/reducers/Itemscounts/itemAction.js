import COUNT_RESULTS from './itemsType';
 
const resultsCount = (cuantity = 0)=>{
       return {
          type: COUNT_RESULTS,
          payload: cuantity
       }
}
 export default resultsCount