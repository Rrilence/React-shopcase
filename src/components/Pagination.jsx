import React from 'react';

const Pagination = ({ 
  itemsPerPage, 
  totalItems, 
  paginate = Function.prototype,
  prevPage = Function.prototype,
  nextPage = Function.prototype,
 }) => {
const pageNumbers = []

for (let i=1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
  pageNumbers.push(i)
}

  return ( <div>
    <ul className='pagination'>
     
      <button className='waves-effect paginate' onClick={() => prevPage()}>&#9668;</button>
     
      {
        pageNumbers.map(number => (
          <li key={number} >
            <button className='waves-effect paginate' onClick={() => paginate(number)}>{number}</button>
          </li>
        ))
      }
      
      <button className='waves-effect paginate arrow' onClick={() => nextPage()}>&#9658;</button>

    </ul>
  </div>
  );
};

export {Pagination};