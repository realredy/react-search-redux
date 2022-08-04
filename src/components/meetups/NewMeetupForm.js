 import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css"; 
import meetupsList from '../../resourse/data.json' 
  // import writeFilep from "write-file-p";

export default  function NewMeetupForm() {


  

  function submitHandler(event) {
    event.preventDefault();
    const form  = event.nativeEvent.path[0];
    const actual = meetupsList.length;
   const pushed = meetupsList.push({
    id: calculationId(meetupsList.length),
    title:        event.target[0].value,
    address:      event.target[2].value,
    image:        event.target[1].value,
    description:  event.target[3].value, 
      })   

    if(pushed > actual){
       showStatusChange(form);
    } 
    }
 

  let calculationId = (int) => {
    const getSum = int + 1;
    return `m${getSum}`;
  }

 
  let showStatusChange = (form) => {
    let BTN = document.getElementsByClassName('ActionBTNText')[0];  
    BTN.innerText = 'Meetup Added'; 
    BTN.style.backgroundColor = "green";
    setTimeout(
      function(){ 
        BTN.style.backgroundColor = "#77002e";
        BTN.innerText = 'Add Meetup'; 
        form.reset();
      }, 4000)

  }





  return (
    <Card> 
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button className="ActionBTNText">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
