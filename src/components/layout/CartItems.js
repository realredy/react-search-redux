import { useDispatch } from "react-redux";
import { emptyCartList } from "../container/cartReducer/addToCart";
import SingleItemCart from "../ui/modules/SingleItemCart"; 
import './CartItems.scss';
export default function CartItems({itemsInCart}) { 
    
  const dispatcher = useDispatch();

  const confirmClearCartList = ()=>{
    if (window.confirm("Do you really want to delete all items in your cart?")) {
       dispatcher( emptyCartList() )
    }
   
  }
  return (
    <div className="cartItems">
      <div className="cartItems-inner">
      <div className="cartItems-inner-wrapperCloseBTN">
        <button className="cartItems-inner-wrapperCloseBTN-close" onClick={()=>{}}><b>+</b></button>
      </div>
        
        <ul className="cartItems-inner-list">
             {
               itemsInCart.length && <SingleItemCart singleItemCart={itemsInCart} />
            }
        </ul>
       <button onClick={()=>{ confirmClearCartList() }} className="cartItems-inner-list-close">CLEAR</button>
        </div>
    </div>
  );
}

