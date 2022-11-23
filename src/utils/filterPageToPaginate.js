export default function filterPageToPaginate(page){
   let setPage = 1; 
   switch (page[0]) {
    case "Next &raquo;":
        setPage = page[1] + 1;  
        break;
        case "&laquo; Previous":
        setPage = page[1] - 1;  
        break;
       
    default:
        setPage = page[0]
        break;
   } 
    const pagination = `?page=${setPage}` 
     return pagination;
}