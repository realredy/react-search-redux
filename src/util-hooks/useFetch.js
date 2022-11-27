import { useState, useEffect } from "react";
import { useSelector } from "react-redux"; 
 // import { createClient } from '@redis';// ! experimental llamar a la libreria de redis

 export const useFetch = (id=null) => {

  const [data, setData] = useState({});
   
  
  useEffect(() => { 
         
   async function getPodcats(){
        let URLTOFECH;
        if(!id){
          URLTOFECH = process.env.REACT_APP_POPCADS_COLLECTION
        } else {
          URLTOFECH = process.env.REACT_APP_PODCADS_SINGLE+id
        }
        console.log('El id desde use fetch: ',process.env.REACT_APP_POPCADS_COLLECTION)
        
      const options = {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      };
      
        try {
         fetch( URLTOFECH , options)
        .then(response  =>  response.json() )
        .then(getData => {
          console.log("🚀 ~ file: useFetch.js ~ line 61 ~ getPodcats ~ getData", getData)
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
 

  }, []);
      
 

   
  return {
    data,
  };
   
};
