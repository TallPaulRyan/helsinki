import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>Header: {props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      <Part info={props.course.parts[0]}/>
      <Part info={props.course.parts[1]}/>
      <Part info={props.course.parts[2]}/>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Part: {props.info.name}</h2>
      <p>Excercise Count: {props.info.count}</p>
    </div>
  )
}

// Still need to fix total
const Total = (props) => {
  return (
    <div>
      <h2>Total: {props.course.parts[0].count + props.course.parts[1].count + props.course.parts[2].count}</h2>
    </div>
  )
}

const App = () => {
  const course = { 
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        count: 10
      },
      {
        name: 'Using props to pass data',
        count: 7
      },
      {
        name: 'State of a component',
        count: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App