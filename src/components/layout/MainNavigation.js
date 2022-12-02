 
 
import { useSelector } from "react-redux";     
import {
  BrowserRouter as Router, 
  Route,
  Routes, 
  Link
} from "react-router-dom";
import Single from "../container/single";
import ProductApp from "../../ProductApp";
export default function MainNavigation() {
  
 

  return (  <>  
      <header className="header" data-test="navigation-header"> 
      
        <nav className="header_boxed-inner-nav">
      
        <Routes> 
            <Route exact path="/" element={<ProductApp />} /> 
          
            <Route path="/single/:id" element={<Single />} />
            </Routes>
    
        </nav> 
        
      </header>      

        
      </>
  );
}
