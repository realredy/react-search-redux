import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import store from "./reducers/store";
import { Provider } from "react-redux";
import './index.scss'; 
import MainNavigation from './components/layout/MainNavigation';

  
ReactDOM.render(  
  

   <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainNavigation />
      </BrowserRouter>
   </Provider>
   </React.StrictMode>
 
, document.getElementById('root'));