import React from 'react';

function Filter({ filterList,category,setCategory}) {
  function filterHandler(title){
    setCategory(title);
  }
  return (
    <div className='filter-btn'>
      {
        filterList.map((data) => {
          const buttonName = data.title === category ? 'btn active' : 'btn';
          return <button onClick={() => filterHandler(data.title)} className={buttonName} key={data.id}>{data.title}</button>
        })
      }
    </div>
  )
}

export default Filter