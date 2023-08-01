import React from 'react';

function Filter({ filterList }) {
  return (
    <div className='filter-btn'>
      {
        filterList.map((data) => {
          return <button className='btn' key={data.id}>{data.title}</button>
        })
      }
    </div>
  )
}

export default Filter