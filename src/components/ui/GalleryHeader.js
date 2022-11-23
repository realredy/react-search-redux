import './styles/galleryHeader.scss'
import { useSelector, useDispatch } from 'react-redux';
import {setAscd, setDesc, setCategiries} from '../../components/container/cartReducer/addToCart';
import { useState } from 'react';

export default function GalleryHeader() {
    const [acdDesc, setAcdDesc] = useState(true) 
    
    const dispatcher = useDispatch();

    return (
     <div className="conten_gellery-header">
         <div className="conten_gellery-header-title">
             <h1>Photography / <span>Premium Photos</span></h1>
         </div>
       
         <div className="conten_gellery-header-sortBy">
            <img className="conten_gellery-header-sortBy-img" src={process.env.PUBLIC_URL + '/sort.png'} alt='sort image' />
            <span className="conten_gellery-header-sortBy-textSort">Sort By </span>
             <span className="conten_gellery-header-sortBy-textPrice">Price</span>
             <button onClick={()=>{ setAcdDesc(!acdDesc)
                  dispatcher(  setAscd(acdDesc ? "ASC":"DEC") )
                }}  className="conten_gellery-header-sortBy-button"></button>
         </div>
     </div>
        );
  }
  