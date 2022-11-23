 
 
import { useSelector } from "react-redux";    
import BoxLayout from "./BoxLayout"

export default function MainNavigation() {
  
 

  return (  <>  
      <header className="header" data-test="navigation-header"> 
      <BoxLayout>
        <nav className="header_boxed-inner-nav">
          <ul className="header_boxed-inner-nav-ul">
            <li className="header_boxed-inner-nav-ul-logo">  
              <a href="/">Postcator</a>
            </li>
          </ul>
        </nav> 
        </BoxLayout>
      </header>      

        
      </>
  );
}
