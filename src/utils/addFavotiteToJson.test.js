import meetupsList from '../resourse/data.json';
import addFavoriteToJson from './addFavotiteToJson';
test('confirm a faforite is added', () => {
   const result = addFavoriteToJson('m2'); 
   expect(result).toBe(1);
})

test("confirm vavorite in json exist", () => {
    let favObject = new Array;
    meetupsList.map(items => {
        if(items.id === 'm2'){ 
            favObject.push(items)
         }   
      }) 
    expect(favObject[0].favorite).toBeTruthy();  
})