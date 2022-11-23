export default function filterCategory(categorys){
   let filtredCollection = [];
  
     categorys.forEach(items => {  
            filtredCollection.push(items.category) 
     }); 
     const dataArr = new Set(filtredCollection);
     let resultOfFilter = [...dataArr]; 

    return resultOfFilter;
} 