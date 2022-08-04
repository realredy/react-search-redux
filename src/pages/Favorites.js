import MeetupItem from "../components/meetups/MeetupItem";
import { useFetch } from "../util-hooks/useFetch";
import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage() {

  
    const ALLUSER = true;
    const { data } = useFetch(ALLUSER); 
    
  if (!data) return <p>Loading... </p>;
     
    return (
      <section>
        <h1>My Favorites</h1>
        <ul className={classes.list}>
          {
            data.map((item, key )=>  <MeetupItem key={key} infocar={item}/> )
          } 
        </ul>
      </section>
    );
   
}
