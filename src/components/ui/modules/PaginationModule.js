import { useDispatch } from "react-redux";
import { setPagination } from "../../container/cartReducer/addToCart";

export default function PaginationModule({ pagination }) {
    const dispatcher = useDispatch();

    const { current_page, last_page, links } = pagination;
    return (
        <>
            <div className="pagination_inner-module">
                <ul>
                    {links.map((items, key) => {

                        return (
                            <li key={key}>
                                <button onClick={() => { dispatcher(setPagination([items.label, current_page])) }} className={items.active ? "active" : items.label == 'Next &raquo;' || items.label == '&laquo; Previous' ? 'arrow': ''} disabled={items.active}>{items.url && items.label == '&laquo; Previous' ? '<' : items.url && Number(items.label) ? `${items.label}` : items.url && items.label == 'Next &raquo;' ? '>' : null}</button>

                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )

}

/**
 * current_page: 1
​
data: Array(6) [ {…}, {…}, {…}, … ]
​
first_page_url: "https://technical-frontend-api.bokokode.com/api/products?page=1"
​
from: 1
​
last_page: 3
​
last_page_url: "https://technical-frontend-api.bokokode.com/api/products?page=3"
​
links: Array(5) [ {…}, {…}, {…}, … ]
 ​
0: Object { url: null, label: "&laquo; Previous", active: false }
 ​
1: Object { url: "https://technical-frontend-api.bokokode.com/api/products?page=1", label: "1", active: true }
 ​
2: Object { url: "https://technical-frontend-api.bokokode.com/api/products?page=2", label: "2", active: false }
 ​
3: Object { url: "https://technical-frontend-api.bokokode.com/api/products?page=3", label: "3", active: false }
 ​
4: Object { url: "https://technical-frontend-api.bokokode.com/api/products?page=2", label: "Next &raquo;", active: false }
 ​
length: 5
 ​
<prototype>: Array []
​
next_page_url: "https://technical-frontend-api.bokokode.com/api/products?page=2"
​
path: "https://technical-frontend-api.bokokode.com/api/products"
​
per_page: 6
​
prev_page_url: null
​
to: 6
​
total: 13
*/