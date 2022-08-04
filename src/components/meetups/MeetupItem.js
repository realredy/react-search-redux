
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export default function MeetupItem({infocar}) { 
 

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
          <button>Add to favorites</button>
        </div>
      </Card>
    </li>
  );
}
