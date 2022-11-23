import CollectionItems from "./modules/CollectionItems";
import { useSelector, useDispatch } from 'react-redux';
import {addToCartFromList} from '../container/cartReducer/addToCart'; 

export default function Collections({allProduct}) {

  const dispatcher = useDispatch();
    return (
         <CollectionItems>
     { allProduct.map((items, key)=>{
      if (!items.featured) { 
        let currency = items.currency === "EUR" ? "€" : "$";
      return(
  
          <div key={key} className="CollectionItems_inner-items">

          <div className="CollectionItems_inner-items-imgSellerAddToCart">
           {items.bestseller && <span>Best Seller</span>} 
            <img src={items.image.src} alt={items.image.alt} />
            <button  onClick={()=>{dispatcher( addToCartFromList({id: items._id, img: items.image.src, name: items.name, price:items.price}) )}} >ADD TO CART</button>
            </div>

            <div className="CollectionItems_inner-items-info">
             <span className="CollectionItems_inner-items-info-category">{items.category}</span>
             <h2 className="CollectionItems_inner-items-info-name">{items.name}</h2>
             <span className="CollectionItems_inner-items-info-price">{currency+`${currency,items.price}`}</span>
            </div>

          </div>
     
      )
     }
     } )}
        </CollectionItems>
    );
  }