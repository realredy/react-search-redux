 
import '../../components/container/style/Search.scss'
export default function Search({searchResults}) { 
    const logo = process.env.PUBLIC_URL + 'logo-ricardo.webp';
   return (
     <div className='search'> 
       <div className='search-wrapper'> 
       <h4>List of items</h4>
         <input type="test" placeholder="buscar..." onKeyUp={searchResults} />
       </div>
 
     </div>
   );
 }