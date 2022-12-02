 
import "./style/content.scss";   

import Collection from "./Collection"; 

import * as action from "../../reducers/Itemscounts/itemAction";
import { useSelector, useDispatch } from "react-redux";


export default function Content({ items,searchResults }) { 

  const dispatch = useDispatch();
 
  let collection;
    if(searchResults){ 
      let itemsCollections = JSON.parse(items);
      let resultsSearchFitred = 
      itemsCollections.filter( individualItems => {
        let allModelsToBeFound = individualItems.model.toLowerCase(); 
        return allModelsToBeFound.includes(searchResults.toLowerCase()) 
          })
          
          // dispatch(action.resultCount(resultsSearchFitred.length ))
          collection = resultsSearchFitred;
          console.log("🚀 ~ file: Content.js:25 ~ Content ~ resultsSearchFitred", resultsSearchFitred)
        }else{
          collection = JSON.parse(items);
        }

   
  console.log(" 🚩collection::🚩 🚩", collection )
 

          return (
            <div className='content'> 
              <div className='content_gellery'> 
                <div className='content_gellery-wrapper-products'> 
             
               
                { collection.length < 1 && typeof collection !== 'object' ?
                      <h4> 🔍 No Items Found.... </h4>
                 : <Collection collections={collection} />   }
                 </div>
              </div> 
            </div>
          );

   

}
  