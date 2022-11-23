 import listOfItemsCart from '../utils/cartListItemsAdded/listOfItemsAdded.json';


export default function sendInfoToCart(product){    
                    listOfItemsCart.push(product) 
             let AddCartconfirm = listOfItemsCart.id === product.id ? 1 : 0;
  
 
    return {AddCartconfirm, listOfItemsCart};
} 