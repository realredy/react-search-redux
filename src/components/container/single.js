import "./style/single.scss";  
 
import Header from "../layout/Header";
import { useFetch } from "../../util-hooks/useFetch";
import WaitModule from "./WaitModule";


import * as action from "../../reducers/cartreducer/cartAction";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
 


function Single() { 
  const selectStorage = useRef();
  const selectColor = useRef();
  const singleID = useRef();
 

   // Init resource of redux
  const dispatch = useDispatch();
   // Get data and status
  const savedata = useSelector((state) => {
    const saveResult =
        state.cart.allUser.length > 0
        ? state.cart.allUser
        : state.cart.error.toString();
    return saveResult;
  });

  // ? =====  get single a item ? ===== //
  const singledata = useSelector((state) => {  
    const getResult =
        state.single.single.id 
        ? state.single.single
        : state.single.error.toString();
    return getResult;
  });

  const singledataLoad = useSelector((state) => {  
    return state.single.loadingData;
  });

 
   let SaveItem = (event) => {
    event.preventDefault()
    if(selectStorage.current.value && selectStorage.current.value != 'select' 
     && selectColor.current.value && selectColor.current.value != 'select'){ 
       const cartBody ={
        id:singleID.current.value,
        colorCode:selectColor.current.value,
        storageCode:selectStorage.current.value 
           }
        
        dispatch(action.savedata( JSON.stringify(cartBody) ))
    } else{
      
    event.target.defaultValue = "Please select both";
    setTimeout(()=>{
      event.target.defaultValue = "Add to cart";
    },1600)
    }
    
  
   }

    return ( 
      <>
      <Header />
        { singledataLoad ? <WaitModule /> : 
         <div className='content'>
          <div className='content_single'>
        <div className='content_single-wrapper'>
          <div className='content_single-wrapper-image'>
            <img src={singledata.imgUrl} alt="ricardo perez single image" />
           </div>   
           <div className='content_single-wrapper-info'>
            <table border = "1">
              <thead>
                <tr>
                  <th>info</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Model:</th>
                  <th>{singledata.model}</th>
                </tr>
                <tr>
                  <th>Brand:</th>
                  <th>{singledata.brand}</th>
                </tr>
                <tr>
                  <th>Price:</th>
                  <th>{singledata.price}</th>
                </tr>
                <tr>
                  <th>CPU:</th>
                  <th>{singledata.cpu}</th>
                </tr>
                <tr>
                  <th>RAM:</th>
                  <th>{singledata.ram}</th>
                </tr>
                <tr>
                  <th>OS:</th>
                  <th>{singledata.os}</th>
                </tr>
                <tr>
                  <th>RAM:</th>
                  <th>{singledata.ram}</th>
                </tr>
                <tr>
                  <th>Resolution:</th>
                  <th>{singledata.displayResolution}</th>
                </tr>
                <tr>
                  <th>Battery:</th>
                  <th>{singledata.battery}</th>
                </tr>
                <tr>
                  <th>Camera:</th>
                  <th>{typeof singledata.primaryCamera == 'object' ?
                   singledata.primaryCamera['0']:
                    singledata.primaryCamera}</th>
                </tr>
                <tr>
                  <th>Battery:</th>
                  <th>{singledata.battery}</th>
                </tr>
                <tr>
                  <th>Dimentions:</th>
                  <th>{singledata.dimentions}</th>
                </tr>
                <tr>
                  <th>Weight:</th>
                  <th>{singledata.weight}</th>
                </tr>
              </tbody> 
            </table>
            <div className='content_single-wrapper-action'>
              <form>
                <span>Select Color:</span><br />
                <input name="id" type="hidden" value={singledata.id} ref={singleID}/>
                <select name="color" ref={selectColor}> 
                <option>select</option>
                { singledata.colors.map((color, key)=>{
                  
                  return(
                    <> 
                    <option key={color}>{color}</option>
                    </>
                  )
                 
                })  
                 } 
                 </select>
                <div className="content_single-wrapper-action-selectStorage">
                  <p>Select Storage Capacity:</p>
                  <select name="storage" ref={selectStorage}> 
                  <option>select</option>
                 {singledata.options.storages && singledata.options.storages.map((storage, key)=>{
                  return(
                    <> 
                    <option key={key}>{storage.name}</option>
                    </>
                  )
                })  
                 }
                 </select>
                </div>
                 
                 <br />
                 <button onClick={SaveItem}>Add to cart</button>
              </form> 
            </div> 
           </div>  
          </div>  
          
      </div>   
    </div>
        }
   
      </> 
  );
  
    
  
  
}

export default Single;