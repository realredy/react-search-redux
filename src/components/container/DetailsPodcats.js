 
 
function DetailsPodcats({data}) { 
    console.log('data from the details: ', JSON.parse(data) )

   const {results} = JSON.parse(data);
   const {resultCount} = JSON.parse(data);
   
    return ( 
     <>
      {results.map(data => {
        return (
            <>
            <div className="single_boxed-inner-details">
            <div className="single_boxed-inner-details-left">
               <img src={data.artworkUrl100} alt="podcaster detail image" />
               <h3>{data.artistName}</h3>
               <span>{data.artistName}</span>
               <br />
               <b>Description: </b>
               <p>
               no data
               </p>
            </div>
            <div className="single_boxed-inner-details-right">
              <div className="single_boxed-inner-details-right-count">{resultCount}</div>
            </div>
            </div>
            
            </>
        )
      })}
     </>
  );
  
    
  
  
}

export default DetailsPodcats;