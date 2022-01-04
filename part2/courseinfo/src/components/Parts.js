import React from 'react'

const Part = ({part}) => {
    return (
        <div>
            <li key={part.id}>
                {part.name}<br/>
                Excercises: {part.exercises}<br/>
                <br/>
            </li>
        </div>
    )
}

const Parts = (props) => {
    return (
        <>
            <ul>
                {props.course.parts.map(part =>
                    <Part part={part} key={part.id}/>
                )}
            </ul>
        </>
    )
}

export default Parts