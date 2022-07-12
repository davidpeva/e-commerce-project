import React from 'react'
import './pagination.css'

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = [];
    //aca hago el loop y divido el totaldepost por el numero de paginas que voy a necesitar el math.ceil me redondea por arriba
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }


    return (
        <nav>
                <ul className='pagination'>
                    {pageNumbers.map(number => (
                        <div key={number} className='page-item' path='true'>
                            <div onClick={() => paginate(number)} href='!#' className='page-link'>
                                {number}
                            </div>
                        </div>
                    ))}
                </ul>
        </nav>

    )
}
