export default function filterListOfChecked(items){
const listofcategorys =  items.children;
 
let listOfChequed = []

 for (let i = 0; i < listofcategorys.length; i++) {
    const element = listofcategorys[i];
     
    
    const confirmChecked = document.getElementById(element.children[1].id);
    

    if(confirmChecked.checked ){
        // console.log(" ed", confirmChecked.id)
       listOfChequed.push(confirmChecked.id) 
    }  
      
 }

return listOfChequed;

}