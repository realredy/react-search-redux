import { useState, useEffect } from "react";
import listMeetups from '../resourse/data.json';

export const useFetch = (isAll = null) => {
  const [data, setData] = useState(null);

  useEffect(() => {
     if(isAll){
        if(listMeetups){
          let favoriteMeetup = listMeetups.filter(items => {
                if(items.favorite){
                  return items
                }
          })
          setData(favoriteMeetup); 
        } 
      return
     }
      if(listMeetups) setData(listMeetups); 

  }, [listMeetups]);

  return {
    data,
  };
};
