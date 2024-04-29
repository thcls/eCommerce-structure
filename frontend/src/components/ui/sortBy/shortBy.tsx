import React from 'react';
import './sortBy.css'
function ShortBySelect(){
  const shotOption = ['Default', 'Date', 'Price']

  return (
    <div className='short-by'>
      <p>Short by</p>
      <select>
        
        {
          shotOption.map( (option, index) =>(
            <option key={index} value={option}>{option}</option>
          ))
        }
      </select>
    </div>
    
  );
};

export default ShortBySelect;
