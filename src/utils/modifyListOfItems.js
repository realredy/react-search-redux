export default function modifyListOfItems(list, parameters){  
  
     parameters?.body?.categories?.push( ...list )
   

 return {...parameters};
}

