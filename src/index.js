import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import './index.scss';
import BokokodeApp from './BokokodeApp';  
import MainNavigation from './components/layout/MainNavigation';

 
 


ReactDOM.render(  
  

   <React.StrictMode>
   <BrowserRouter>
   <MainNavigation />
   </BrowserRouter>
 </React.StrictMode>
 
, document.getElementById('root'));