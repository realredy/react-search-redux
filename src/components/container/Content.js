import { useSelector, useDispatch } from 'react-redux'; 
import "./style/content.scss"   
// import { useFetch } from '../../util-hooks/useFetch';
  import { Link, useParams } from 'react-router-dom';


export default function Content({ podcats }) {
 const {feed} = JSON.parse(podcats);
 console.log('feeds:',feed)
  return (
    <div className='content'> 
      <div className='content_gellery'> 
        <div className='content_gellery-wrappSidebarCollectionPodcats'> 
         {feed.entry.map((potcat) => {
          return (
            <>
            <div key={potcat['im:name'].label} className='content_gellery-wrappSidebarCollectionPodcats-cart'>
              <img src={ potcat['im:image'][0].label }    alt="imge of podcats"/>
                <h3><Link to={`${'/podcast/'}`+potcat.id.attributes['im:id'] }>{potcat['im:name'].label}</Link></h3>
                <span>Author: {potcat['im:artist'].label}</span>
            </div>
             {/* {console.log(potcat.id.attributes['im:id'])} */}
            </>
          )
         })}
        </div>
      </div>

    </div>
  );
}
