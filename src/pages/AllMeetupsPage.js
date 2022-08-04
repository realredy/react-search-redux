import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";
import { useFetch } from "../util-hooks/useFetch";


export default function AllMeetupsPage() {
  const { data } = useFetch(); 
  
if (!data) return <p>Loading... </p>;
   
  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {
          data.map((item, key )=>  <MeetupItem key={key} infocar={item}/> )
        } 
      </ul>
    </section>
  );
}
