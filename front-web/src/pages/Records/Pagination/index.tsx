import React from 'react';
import './styles.css'

type Propos =  {
    totalPages?: number;
    gotoPage: Function;
    activePage: number;
}

const Pagination = ({ totalPages = 0, gotoPage, activePage} : Propos) =>{
    const paginationItems = Array.from(Array(totalPages).keys());

    return(
        <div className="pagination-container">
            {paginationItems.map(item => (
                <button
                    key={item} 
                    className= {`pagination-item ${activePage === item ? 'active' : 'inactive'}`}
                    onClick={() => gotoPage(item)}
                    >
                        {item + 1}
                </button>
            ))}
           
        </div>
    );
}

export default Pagination;