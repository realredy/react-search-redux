 
 
import { useSelector } from "react-redux"; 
import { useFetch } from "../../util-hooks/useFetch";
import BoxLayout from "./BoxLayout";
import CartItems from "./CartItems"; 
import './MainNavigation.scss';


export default function MainNavigation() {
  

  const counterFavorite = useSelector((state) => state.cartReducer.added);
      const countItemCart = counterFavorite?.listOfItemsCart?.length;
 

  return (  <>  
      <header className="header" data-test="navigation-header"> 
      <BoxLayout>
        <nav className="header_boxed-inner-nav">
          <ul className="header_boxed-inner-nav-ul">
            <li className="header_boxed-inner-nav-ul-logo">  
               <img className="header_boxed-inner-nav-ul-logo-img" src={process.env.PUBLIC_URL + '/logo.png'} /> 
            </li>
            <li className="header_boxed-inner-nav-ul-cart">  
            <span className="header_boxed-inner-nav-ul-cart-span">{countItemCart > 0 && countItemCart}</span>
            <img className="header_boxed-inner-nav-ul-cart-img" src={process.env.PUBLIC_URL + '/cart.png'} /> 
            {countItemCart > 0 && <CartItems itemsInCart={counterFavorite?.listOfItemsCart}/> } 
            </li>
          </ul>
        </nav> 
        </BoxLayout>
      </header>      

        
      </>
  );
}
