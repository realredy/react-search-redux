import '../styles/collectionItems.scss';
export default function CollectionItems({ children }) {
  return(
    <div className="CollectionItems"> 
         <div className="CollectionItems_inner">
           {children}
         </div>
    </div>
  )
}