import './styles/feature.scss';
import { useDispatch } from 'react-redux';
import {addToCart} from '../container/cartReducer/addToCart';  
import PeopleAlsoBuy from './modules/PeopleAlsoBuy';



export default function Featured( {feature} ) {
 
  const dispatcher = useDispatch();
  
  return (
    <div className='feature'>
      {feature.map((item, key) => {
        if (item.featured) { 
          return (
            <div key={key} className='feature_inner'>
              <div className='feature_inner-header'>
                <h1 className='feature_inner-header-h1'>{item.category}</h1>
                <button onClick={()=>{dispatcher( addToCart({id: item._id, img: item.image.src, name: item.name, price:item.price}) )}} className='feature_inner-header-cartButton'>ADD TO CART</button>
              </div>
              <div className='feature_inner-imageContainer'>
                <img src={item.image.src} alt={item.image.alt} />
                <b>Photo of the day</b>
              </div>

              <div className='feature_inner-descModule'>
                <div className='feature_inner-descModule-items'>
                  <h2>{item.name}</h2>
                  <h3>{item.category}</h3>
                  <p>{item.description}</p>
                </div>

                <div className='feature_inner-descModule-Module'>
                  <PeopleAlsoBuy>
                  {item.people_also_buy.map( (items, key)=>{ 
                    let currency = items.currency === "EUR" ? "€" : "$";
                   
                    return(
                      <div key={key} className="PeopleAlsoBuy_inner-items"> 
                        <img className="PeopleAlsoBuy_inner-items-img" src={items.image.src} alt={items.image.alt} /> 
                        <span className="PeopleAlsoBuy_inner-items-span">{items.category}</span>
                        <b className="PeopleAlsoBuy_inner-items-b">{items.name}</b>
                        <p className="PeopleAlsoBuy_inner-items-p">{currency+`${currency,items.price}`}</p>
                      </div>
                    )
                  })}
                  </PeopleAlsoBuy> 
                </div>

              </div>
            </div>
          )
        }

      })}
    </div>
  );
}