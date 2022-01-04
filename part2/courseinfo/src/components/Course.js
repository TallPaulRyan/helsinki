import React from 'react'
import Header from './Header'
import Parts from './Parts'

const Course = ({course}) => {
    return (
        <>
            <Header course={course}/>
            <Parts course={course}/>
        </>
    )
}

export default Course