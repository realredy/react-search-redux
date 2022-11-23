 
import MainNavigation from "./components/layout/MainNavigation";
import Layout from './components/layout/Layout';
import Content from "./components/container/Content";
import { useFetch } from "./util-hooks/useFetch";
import WaitModule from "./components/container/WaitModule";
import { useSelector } from "react-redux";  
import { useState } from "react";
import Pagination from "./components/ui/Pagination";
import PaginationModule from "./components/ui/modules/PaginationModule";
// import setFetchParameterJson from '../../../../utils/cartListItemsAdded/fetchPatamethers.json';
 
function BokokodeApp() { 

  const counterFavorite = useSelector((state) => state.cartReducer.added); 
  const fetchReducer = useSelector((state) => state.cartReducer.parameters); 
  const pagination = useSelector((state) => state.cartReducer.page); 

  
  const collection = useFetch(fetchReducer,pagination);
  const {data} = collection; 
  const getCollection =  data?.transformedResponse?.data;
  const paginationData = data?.transformedResponse;
   
  return ( 
      <div data-test="app"> 
        <MainNavigation /> 
        <Layout>
         {getCollection ? <Content product={getCollection}/> : <WaitModule /> } 
         <Pagination>
         {paginationData && <PaginationModule pagination={paginationData}/>}
         </Pagination>
        </Layout>
      </div>   
  );
}

export default BokokodeApp;
