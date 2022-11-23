import { useState, useEffect } from "react";
import { useSelector } from "react-redux"; 
   import axios from "axios";
 export const useFetch = (parameters = null, paginate = '?page=1') => {

  const [data, setData] = useState(null);
   
  
  useEffect(() => { 
    fetch(process.env.REACT_APP_COLLECTION+paginate, {...parameters, body: JSON.stringify(parameters.body) })
      .then(
        async getResponse => { 
        const transformedResponse = await getResponse.json(); 
        // check for error response
        if (!transformedResponse.ok) {
          setData(
            {
              errorMessage: transformedResponse.message,
              errorText: transformedResponse.statusText
            }
          )
        }
        return transformedResponse.data;
      } 
      )
      .then(transformedResponse => {
        setData(
          {
            transformedResponse 
          }
        )
      }
      )
      .catch(error => {
        setData({ errorMessage: error.toString() });
        console.error('There was an error!', error);
      })
 

  }, [parameters, paginate]);

   
  return {
    data,
  };
   
};
