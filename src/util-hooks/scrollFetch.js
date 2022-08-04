import { useEffect, useState } from "react"; 


const HEADER_CLASS = 'MainNavigation_header__A+kIW';
const headerContainer = document.getElementsByClassName(HEADER_CLASS)[0]; 

export const useScrollFetch = (scrollPosition = null) => {

  const [scroll, setScroll] = useState(null);
 

  useEffect(() => {
    window.onscroll = () => { 
       
               console.log(window.scrollY)
    }

  }, [scrollPosition]);

  return scroll ;


};