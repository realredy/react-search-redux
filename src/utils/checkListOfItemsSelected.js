export default function checkListOfItemsSelected(categories, id) {
  console.log(" categories", categories) 
      let checked = false;
        categories.forEach(toCheck => { 
            checked = toCheck == id ? true : false
                 
        });
        return checked;
} 