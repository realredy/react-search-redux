 import '../../components/container/style/Header.scss'
export default function Header({cuantity}) { 
   const logo = process.env.PUBLIC_URL + 'logo-ricardo.webp';
  const countItems = cuantity ? JSON.parse(cuantity).length: '';
  return (
    <div className='Header'> 
      <div className='Header-wrapper'>  
     <a href="/"><img src={logo} alt="test ricardo icon" /></a> 

       <ul>

        <li>Items found: <i>{countItems}</i></li>
        <li>items 2</li>
       </ul>
      </div>

    </div>
  );
}
