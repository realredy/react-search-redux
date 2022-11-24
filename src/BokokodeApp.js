 
 
import Content from "./components/container/Content";
import { useFetch } from "./util-hooks/useFetch";
import WaitModule from "./components/container/WaitModule";
 import MainNavigation from "./components/layout/MainNavigation"; 
 
 
function BokokodeApp() { 

    const  collectionPodcats =  useFetch();
 
    return ( 
      <div data-test="app">  
       {/* <MainNavigation /> */}
        { collectionPodcats.data.transformedResponse && <Content podcats={collectionPodcats.data.transformedResponse} />  } 
        { !collectionPodcats.data.transformedResponse &&  <WaitModule />   } 
        
      </div>   
  );
  
    
  
  
}

export default BokokodeApp;
