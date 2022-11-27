 
 
import Content from "./components/container/Content";
import { useFetch } from "./util-hooks/useFetch";
import WaitModule from "./components/container/WaitModule";
 import MainNavigation from "./components/layout/MainNavigation"; 
 
 
function BokokodeApp() { 

    const  collectionPodcats =  useFetch();
    console.log("🚀 ~ file:  ~ collectionPodcats", collectionPodcats)
    
    return ( 
      <div data-test="app">  
       {/* <MainNavigation /> */}
        { collectionPodcats.data.data && <Content podcats={collectionPodcats.data.data} />  } 
        { !collectionPodcats.data.data &&  <WaitModule />   } 
        
      </div>   
  );
  
    
  
  
}

export default BokokodeApp;
