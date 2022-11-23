import { useSelector, useDispatch } from 'react-redux'; 
import "./style/content.scss"   
import { useFetch } from '../../util-hooks/useFetch';


export default function Content({ podcats }) {
 const {feed} = JSON.parse(podcats);
  //  console.info('podcats:: ',  feed)

  return (
    <div className='content'> 
      <div className='content_gellery'> 
        <div className='content_gellery-wrappSidebarCollectionPodcats'> 
         {feed.entry.map(potcat=>{
          return (
            <>
            <div className='content_gellery-wrappSidebarCollectionPodcats-cart'>
              <img src={ potcat['im:image'][0].label }    alt="imge of podcats"/>
                <h3>{potcat['im:name'].label}</h3>
                <span>Author: {potcat['im:artist'].label}</span>
            </div>
             {console.log(potcat)}
            </>
          )
         })}
        </div>
      </div>

    </div>
  );
}
