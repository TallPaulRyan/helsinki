import React, { useState } from 'react'


const Button = ({handleClick,text}) => {
  return (
    <>
      <button onClick={handleClick}>
        {text}
      </button>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [rating, setRating] = useState(new Array(anecdotes.length).fill(0))
  const [maxRatingIndex, setMaxRatingIndex] = useState(0)

  const handleRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
    setMaxRatingIndex(handleMaxRating(rating))
  }

  const handleRating = () => {
    let updatedRating = [...rating]
    updatedRating[selected] += 1
    setRating(updatedRating)
    setMaxRatingIndex(handleMaxRating(updatedRating))
  }

  const handleMaxRating = (rating) => {
    const newRating = rating.indexOf(Math.max(...rating))
    return newRating
  }

  return (
    <div>
      <h1>Anecdote of the day!</h1>
      {anecdotes[selected]}<br/>
      Rating: {rating[selected]}<br/>
      <Button handleClick={handleRating} text='vote'/>
      <Button handleClick={handleRandom} text='randomize'/><br/>
      <h1>Anecdote with the most votes</h1>
      {anecdotes[maxRatingIndex]}
    </div>
  )
}

export default App