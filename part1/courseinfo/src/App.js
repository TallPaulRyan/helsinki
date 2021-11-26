import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>Header: {props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part name={props.part1} count={props.count1}/>
      <Part name={props.part2} count={props.count2}/>
      <Part name={props.part3} count={props.count3}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <h2>Part: {props.name}</h2>
      <p>Excercise Count: {props.count}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total: {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} count1={exercises1} count2={exercises2} count3={exercises3}/>
    </div>
  )
}

export default App