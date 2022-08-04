import { useState, useEffect } from "react";
import listMeetups from '../resourse/data.json';
export const useFetch = (options) => {
  const [data, setData] = useState(null);

  useEffect(() => { 
      if(listMeetups) setData(listMeetups); 
  }, [options.url]);

  return {
    data,
  };
};
