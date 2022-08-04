import { useState } from "react";
//  import { useScrollFetch } from "./util-hooks/scrollFetch";
//  import headerPosition from "./util-hooks/headerPosition";
 
import { BrowserRouter as Router} from "react-router-dom"; 
import MainNavigation from "./components/layout/MainNavigation";


const HEADER_CLASS = 'MainNavigation_header__A+kIW';
   const headerContainer = document.getElementsByClassName(HEADER_CLASS)[0]; 

function MeetupApp() { 
 
  return (
    <Router> 
      <div data-test="app">
        <MainNavigation /> 
      </div>  
    </Router>
   
  );
}

export default MeetupApp;
