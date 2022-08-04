import { 
         ALL_MEETUP_PAGE, 
         FAVORITES_PAGE, 
         NEW_MEETUP_PAGE 
        } from "./../../utils/constants";
import AllMeetupsPage from "../../pages/AllMeetupsPage";
import FavoritesPage from "../../pages/Favorites";
import NewMeetupsPage from "../../pages/NewMeetup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Layout from "../../components/layout/Layout";

import classes from "./MainNavigation.module.css";

export default function MainNavigation({ setPage }) {
  return (  <>  
      <header className={classes.header} data-test="navigation-header">
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
                <span className={classes.badge}>{0}</span> 
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
