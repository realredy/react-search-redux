
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useSelector, useDispatch } from 'react-redux'; 
import addMeetup from "./meetuptReducer/meetupAction";

export default function MeetupItem({infocar}) { 
 
const dispatcher = useDispatch();
    
   let TextButton = infocar.favorite ?  'Added to favorite' : 'Add to favorites' ;
 

  return (
    <li className={classes.item} data-test='meet-up-item'>
      <Card>
        <div className={classes.image}>
          <img src={infocar.image} alt={infocar.title} />
        </div>
        <div className={classes.content}>
          <h3>{infocar.title}</h3>
          <address>{infocar.address}</address>
          <p>{infocar.description}</p>
        </div>
        <div className={classes.actions}>
        <button disabled={infocar.favorite} onClick={()=>{dispatcher( addMeetup(infocar.id) )}} id={`MeetupItem_${infocar.id}`}>{TextButton}</button>
        </div>
      </Card>
    </li>
  );
}
