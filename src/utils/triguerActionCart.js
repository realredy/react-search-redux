 
const triguerActionCart = (itemToAdd) => { 
    let result = 0;
    meetupsList.map(items => {
       if(items.id === itemToAdd){ 
          items.favorite = true;  
          result += 1;
       }   
    })
     

    return result;
}
export default addFavoriteToJson; 