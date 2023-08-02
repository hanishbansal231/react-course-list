import React from 'react'
import { FcLike,FcLikePlaceholder } from 'react-icons/fc';
import { useState } from 'react';
import {toast} from 'react-toastify'
function Card(props) {
  let course = props.course;
  let likeCourse = props.likeCourse;
  let setLikeCourse = props.setLikeCourse;
  const [readmore,setRead] = useState(true);
  const info = readmore ? `${course.description.substring(0,150)}....` :course.description;
  function readHandler(){
    setRead(!readmore);
  }
  function clickHandle(){
    if(likeCourse.includes(course.id)){
      setLikeCourse((prev) => prev.filter((cid) => cid !== course.id));
      toast.error('Remove Like');
    }else{
      if(likeCourse.length === 0){
        setLikeCourse([course.id]);
      }else{
        setLikeCourse((prev) => [...prev,course.id]);
      }
      toast.success('Success Like');
    }
  }
  return (
    <div className='card'>
      <img src={course.image.url} className='image' alt={course.title} />
      <div className='cardContant'>
        <button className='likebtn' onClick={clickHandle}>
          {
            likeCourse.includes(course.id) ? (<FcLike />) : (<FcLikePlaceholder/>)
          }
        </button>
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