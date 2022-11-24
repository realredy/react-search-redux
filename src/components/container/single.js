 
import MainNavigation from "../layout/MainNavigation"; 
import { useFetch } from "../../util-hooks/useFetch";
import { useParams } from "react-router-dom";
import SingleWrapper from "../childComponents/SingleWrapper";
import DetailsPodcats from "./DetailsPodcats";
import WaitModule from "./WaitModule";
 
 
function Single() { 
 
  let {id} = useParams();
 
    const  singlePodCast =  useFetch(id);
  
    return ( 
      <div data-test="app">  
        { singlePodCast.data.transformedResponse && 
        <SingleWrapper>
            <DetailsPodcats data={singlePodCast.data.transformedResponse}/>
        </SingleWrapper>   } 
        { !singlePodCast.data.transformedResponse &&  <WaitModule />   } 
        
      </div>   
  );
  
    
  
  
}

export default Single;