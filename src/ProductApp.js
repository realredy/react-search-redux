

import Content from "./components/container/Content";
import { useFetch } from "./util-hooks/useFetch";
import WaitModule from "./components/container/WaitModule";
import Header from "./components/layout/Header";
import Search from "./components/layout/Search";
import { useState } from "react";


function ProductApp() {  

  const [search, setSearch] = useState('');

  const allItems = useFetch(); 
 
  const { data } = allItems.data;
  
  
  let searchResult = (e) => {
    setSearch(e.target.value);
  }

  
 

  return (
    <div className="app" data-test="app">
      <div className="app-wrapper">
        <Header cuantity={data && data} />
        <Search searchResults={searchResult} />
        {data && <Content items={data} searchResults={search}  />}
        {!data && <WaitModule />}
      </div>
    </div>
  );




}

export default ProductApp;
