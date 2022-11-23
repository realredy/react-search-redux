import '../styles/peopleAlsoBuy.scss';
export default function PeopleAlsoBuy({ children }) {
  return(
    <div className="PeopleAlsoBuy">
        <h2>People also buy</h2>
         <div className="PeopleAlsoBuy_inner">
           {children}
         </div>
    </div>
  )
}