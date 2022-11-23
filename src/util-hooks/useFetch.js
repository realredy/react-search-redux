import { useState, useEffect } from "react";
import { useSelector } from "react-redux"; 
   import axios from "axios";
 export const useFetch = () => {

  const [data, setData] = useState({});
   
  
  useEffect(() => { 
         
       function getPodcats(){
        
   
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')}` )
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
