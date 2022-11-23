import './styles/pagination.scss';
export default function Pagination({children}){
    return (
        <>
          <footer className="pagination">
           <div className="pagination_inner">
                {children}
           </div>
          </footer>
        </>
    )
}