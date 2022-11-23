import { useSelector, useDispatch } from 'react-redux'; 
import "./style/content.scss"
import Sidebar from "../ui/Sidebar";
import Featured from '../ui/Featured';
import Collections from '../ui/Collections';
import GalleryHeader from '../ui/GalleryHeader';
import { useFetch } from '../../util-hooks/useFetch';


export default function Content({ product }) {

  
  
  

  return (
    <div className='content'>
      <Featured feature={product} />
      <div className='content_gellery'>
        <GalleryHeader />
        <div className='content_gellery-wrappSidebarCollection'> 
        <Sidebar categorys={product} /> 
        <Collections allProduct={product} />
        </div>
      </div>

    </div>
  );
}
