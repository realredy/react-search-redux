 
export default function setFetchParameter(param, parameters){
      const switchSort = ()=>{
        let ascOrDesc = ''
        const actual = parameters.body.sort.type;
         if(actual === "ASC"){
            ascOrDesc = "DEC" 
         } else { 
            ascOrDesc = "ASC"
         }
         
         return ascOrDesc;
    }
    console.log(switchSort())
    let dat =  parameters.body.sort.type = switchSort();
   
return {...parameters,dat};
}