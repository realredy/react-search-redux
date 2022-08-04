import {ADD_TO_FAVORITE, DELETTE_FAVORITE} from './meetupType';

const addMeetup = (itemToAddOrDelette) => {

    return {
        type: ADD_TO_FAVORITE,
        payload: itemToAddOrDelette
    }
} 

export default addMeetup