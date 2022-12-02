import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
 
 export const useFetch = (id=null) => {   
 

  const [data, setData] = useState({});
   
 
  
  useEffect(() => { 
         
   async function getPodcats(){
        let URLTOFECH;
        if(!id){
          URLTOFECH = process.env.REACT_APP_POPCADS_COLLECTION
        } else {
          URLTOFECH = `${process.env.REACT_APP_POPCADS_COLLECTION}/`+id;
        }
        
        
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
          
          const status = getData.status.http_code
       
           const data =  getData.contents
          
         status === 200 ? setData({data}) : setData({msg: `No data from service`})
        })
 
       
      } catch (err) {
        console.log(err);
        setData({msg: `Internal Server Error.`});
      }
          }
    

      getPodcats();
 

  }, [id]);
      
      
 

   
  return {
    data,
  };
   
};
