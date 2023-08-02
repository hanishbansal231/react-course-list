import React from 'react'
import Card from './Card';
import { useState } from 'react';
import { VscEmptyWindow } from 'react-icons/vsc'
function Cards(props) {
    const [likeCourse, setLikeCourse] = useState([]);
    let courses = props.courses;
    let category = props.category;
    function changeData() {
        if (category === 'All') {
            let allCourse = [];
            Object.values(courses).forEach(array => {
                array.forEach(course => {
                    allCourse.push(course);
                })
            })
            return allCourse;
        } else {
            return courses[category];
        }
    }
    if (changeData().length === 0) {
        return (
            <>
                <div className='empty'>
                    <div><VscEmptyWindow /></div>
                    <div>Data Not Found</div>
                </div>
            </>
        )
    }
    return (
        <div className='cards'>
            {
                changeData().map(course => {
                    return <Card key={course.id} course={course} likeCourse={likeCourse} setLikeCourse={setLikeCourse} />
                })
            }
        </div>
    )
}

export default Cards;