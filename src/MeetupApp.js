import { useState } from "react";

// import AllMeetupsPage from "./pages/AllMeetupsPage";
// import FavoritesPage from "./pages/Favorites";
// import NewMeetupsPage from "./pages/NewMeetup";
// import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./utils/constants";
import { BrowserRouter as Router} from "react-router-dom"; 
import MainNavigation from "./components/layout/MainNavigation";


function MeetupApp() { 
 
  return (
    <Router> 
      <div data-test="app">
        <MainNavigation setPage={setPage} /> 
      </div>  
    </Router>
   
  );
}

export default MeetupApp;
