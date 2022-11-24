import { useState, useEffect } from "react";
import { useSelector } from "react-redux"; 
   import axios from "axios";
 export const useFetch = (id=null) => {

  const [data, setData] = useState({});
   
  
  useEffect(() => { 
         
       function getPodcats(){
        let URLTOFECH;
        if(!id){
          URLTOFECH = process.env.REACT_APP_POPCADS_COLLECTION
        } else {
          URLTOFECH = process.env.REACT_APP_PODCADS_SINGLE+id
        }
        console.log('El id desde use fetch: ',process.env.REACT_APP_POPCADS_COLLECTION)
        
        
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`${URLTOFECH}`)}` )
      .then(
        async getResponse => { 
         
        const transformedResponse = await getResponse.json();  
        
        if (!transformedResponse.contents) {
          setData(
            {
              errorMessage: transformedResponse.message,
              errorText: transformedResponse.statusText
            }
          )
        }
         return transformedResponse.contents;
      } 
      )
      .then(transformedResponse => {  
       
 
        setData( 
            {transformedResponse } 
        )
      }
      )
      .catch(error => {
        setData({ errorMessage: error.toString() });
        console.error('There was an error!', error);
      })

          }

      getPodcats();
 

  }, []);

   
  return {
    data,
  };
   
};
