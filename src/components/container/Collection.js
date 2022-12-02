import { Link } from "react-router-dom"
import * as action from "../../reducers/getsingle/singleAction";
import { useSelector, useDispatch } from "react-redux";
 
export default function Collection({collections}) { 
  const dispatch = useDispatch();

  
  return (
    <> 
    { collections && collections.map(( item, key ) => { 
            return (
               <div key={key} className='content_gellery-wrapper-products-items'>
                   <div className='content_gellery-wrapper-products-items-imageBrands'>
                      <span className='content_gellery-wrapper-products-items-imageBrands-brand'>
                        {item.brand}
                      </span>
                       <img className='content_gellery-wrapper-products-items-imageBrands-img' src={item.imgUrl} alt="riardo perez test image of product"/>
                    </div> 
                    <div className='content_gellery-wrapper-products-items-info'>
                      <h2>Model: {item.model}</h2>
                      <p>Price:  ${item.price} </p>
                      <Link onClick={() => dispatch(action.getSingleData(item.id))} to={'/single/'+item.model}>See Details</Link> 
                    </div>
                </div> 
             )
           })

    }
 </>
  )
 
    
 
  
}

  