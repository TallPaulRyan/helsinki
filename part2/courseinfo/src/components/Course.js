import React from 'react'
import Header from './Header'
import Parts from './Parts'
import Stats from './Stats'

const Course = ({course}) => {
    return (
        <>
            <Header course={course}/>
            <Parts course={course}/>
            <Stats course={course}/>
        </>
    )
}

const Courses = ({courses}) => {
    return (
        <>
            {courses.map(course => 
                <Course course={course} key={course.id}/>
            )}
        </>
    )
}

export default Course