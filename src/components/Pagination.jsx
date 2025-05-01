import { useContext } from 'react';
import { ShopContext } from '../context';
import React from 'react';

const Pagination = ({ 
  itemsPerPage, 
  totalItems, 
  currentPage
 }) => {
const pageNumbers = []

const {paginate, prevPage, nextPage} = useContext(ShopContext);

const totalPage = Math.ceil(totalItems / itemsPerPage);

for (let i=1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
  pageNumbers.push(i)
}

  return ( <div>
    <ul className='pagination'>
     
      <button className='waves-effect paginate' onClick={() => prevPage()} disabled={currentPage === 1}>&#9668;</button>
     
      {
        pageNumbers.map(number => (
          <li key={number} >
            <button className='waves-effect paginate' onClick={() => paginate(number)} >{number}</button>
          </li>
        ))
      }
      
      <button className='waves-effect paginate arrow' onClick={() => nextPage()} disabled={currentPage === totalPage}>&#9658;</button>

    </ul>
  </div>
  );
};

export {Pagination};