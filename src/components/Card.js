import React from 'react'
import { FcLike } from 'react-icons/fc';
import { useState } from 'react';
function Card(props) {
  let course = props.course;
  const [readmore,setRead] = useState(true);
  const info = readmore ? `${course.description.substring(0,150)}....` :course.description;
  function readHandler(){
    setRead(!readmore);
  }
  console.log(info);
  return (
    <div className='card'>
      <img src={course.image.url} className='image' />
      <div className='cardContant'>
        <button className='likebtn'><FcLike /></button>
        <h2 className='cardHeading'>{course.title}</h2>
        <p className='description'>
          {info}
          <span className='showMore' onClick={readHandler}>{readmore ? `Show More` : `Show Less`}</span>
        </p>
      </div>
    </div>
  )
}

export default Card