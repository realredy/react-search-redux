export default function SingleItemCart({ singleItemCart }) {
   

        return (<>
        { singleItemCart.map((items, key) => {  
            return(
                 <li key={key}>
                <div className="cartItems-inner-list-wrapper">
                    <div className="cartItems-inner-list-wrapper-left">
                        <p>{items.name}</p>
                        <span>€{items.price}</span>
                    </div>
                    <div className="cartItems-inner-list-wrapper-right">
                        <img src={items.img} alt="items in cart" />
                    </div>
                </div>

            </li>
            )
         })}
       
        </>
           
        );
 

}