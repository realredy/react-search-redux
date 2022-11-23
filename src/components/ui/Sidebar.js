 
  import { useState, useRef } from 'react';
  import './styles/sidebar.scss';
  import filterCategory from '../../utils/filterListCategory';
  import filterListOfChecked from '../../utils/filterListOfChecked';
import { selectItemsFromCategorys } from '../container/cartReducer/addToCart'; 
import { useDispatch } from 'react-redux';
import checkListOfItemsSelected from '../../utils/checkListOfItemsSelected';


export default function Sidebar({categorys}) {
  const listItems = ["people", "food", "landmarks", "pets", "premium", "cities", "nature"];
  
  const listtOfElem = useRef();
  
  const dispatcher = useDispatch();

  const fillListOfItems = ( ) => { 

       dispatcher( selectItemsFromCategorys( filterListOfChecked(listtOfElem.current) ) ) 
  }
 
  

  return(
    <div className='category'>
      <h2>Category</h2>
      <ul ref={listtOfElem} className='category_inner'>
      {/* { filterCategory(categorys).map((items, key)=>{ */}
        { listItems.map((items, key)=>{
          return(
            <li key={key} className='category_inner-li'>
              <label htmlFor={items}>{items}</label>
              <input checked={  filterCategory(categorys).includes(items) /* checkListOfItemsSelected( filterCategory(categorys) ,items) */} onChange={()=>{  fillListOfItems( )  }} id={items} type='checkbox' />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
