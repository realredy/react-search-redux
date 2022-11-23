import listOfItemsCart from '../utils/cartListItemsAdded/listOfItemsAdded.json';


export default function clearAllItemsInCart(addedList){    
   
            listOfItemsCart.splice(0,listOfItemsCart.length)
 
    return {};
} 
                    