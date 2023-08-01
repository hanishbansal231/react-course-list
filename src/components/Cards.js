import React from 'react'
import Card from './Card';
function Cards(props) {
    let courses = props.courses;
    function changeData() {
        let allCourse = [];
        Object.values(courses).forEach(array => {
            array.forEach(course => {
                allCourse.push(course);
            })
        })
        return allCourse;
    }
    changeData();
    return (
        <div className='cards'>
            {
                changeData().map(course => {
                    return <Card key={course.id} course={course} />
                })
            }
        </div>
    )
}

export default Cards;