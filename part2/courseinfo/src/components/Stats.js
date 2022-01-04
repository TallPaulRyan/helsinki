import React from 'react'

const Stats = (props) => {

    let exercises = props.course.parts.reduce((s,p) => 
        s + p.exercises
    , 0)

    return (
        <>
            Total of {exercises} exercises.
        </>
    )
}

export default Stats