 
import { useState } from "react";
import AllMeetupsPage from "../../pages/AllMeetupsPage";
import FavoritesPage from "../../pages/Favorites";
import NewMeetupsPage from "../../pages/NewMeetup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, 
} from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { useSelector } from "react-redux";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {



  const [scroll, setScroll] = useState("");
  

    window.onscroll = () => { 
      
      let positionYWindows = window.scrollY;
      positionYWindows < 80 ? setScroll("") : setScroll("fixed"); 
   
  }



  const counterFavorite = useSelector((state) => state.meetupReducer.added);
    
  return (  <>  
      <header className={`${classes.header} ${scroll}`} data-test="navigation-header">
        <div className={classes.logo}>React Meetups</div>
        <nav>
          <ul>
            <li> 
              <Link to="/">All Meetups</Link>
            </li>

            <li> 
              <Link to="/new">Add New Meetup</Link>
            </li>
            <li> 
                <span className={classes.badge}>{counterFavorite}</span> 
              <Link to="/favorite">My Favorites</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Layout>
      <Routes>
       <Route exact path="/" element={<AllMeetupsPage />} > 
      </Route>
        <Route path="/favorite" element={<FavoritesPage />}> 
      </Route>
        <Route path="/New" element={<NewMeetupsPage />}> 
      </Route>
     </Routes>
    </Layout>
      </>
  );
}
