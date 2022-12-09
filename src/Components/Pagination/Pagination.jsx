import React from 'react'
import './pagination.css'
import ReactPaginate from 'react-paginate';
import { useEffect } from 'react';


export default function Pagination({ getItems, postsPerPage, totalPosts, paginate, currentPage, setCurrentPage }) {
    // ------------------------
    const pageNumbers = [];
    // aca hago el loop y divido el totaldepost por el numero de paginas que voy a necesitar el math.ceil me redondea por arriba
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    // ------------------------

    // const pageCount = [];

    // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    //     pageCount.push(i)
    // }

    // const handlePageClick = (event) => {
    //     const newOffset = (event.selected * postsPerPage) % totalPosts
    //     setCurrentPage(newOffset);
    //     console.log('si entre aca')
    // };

    return (
        // ---------------------------------
        <nav>
                <ul className='pagination'>
                    {pageNumbers.map(number => (
                        <div key={number} className='page-item' path='true'>
                            <div  onClick={() => paginate(number)} href='!#' className={`page-link ${currentPage === number ? 'active' : null}`}>
                                {number}
                            </div>
                        </div>
                    ))}
                </ul>
        </nav>
        // ---------------------------------
        // <nav>
        //     <ReactPaginate
        //         path='true'
        //         activeClassName="active"
        //         className='pagination page-item text-dark'
        //         breakLabel='...'
        //         nextLabel='>>'
        //         onClick={paginate}
        //         onPageChange={handlePageClick}
        //         pageRangeDisplayed={2}
        //         marginPagesDisplayed={3}
        //         pageCount={pageCount.length}
        //         previousLabel='<<'
        //         renderOnZeroPageCount={null}
        //     />
        // </nav>
    )
}

