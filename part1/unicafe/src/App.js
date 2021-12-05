import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button> 
)

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleGood = () => {
    const updateFeedback = {
      ...feedback,
      good: feedback.good + 1
    }
    setFeedback(updateFeedback)
  }

  const handleNeutral = () => {
    const updateFeedback = {
      ...feedback,
      neutral: feedback.neutral + 1
    }
    setFeedback(updateFeedback)
  }

  const handleBad = () => {
    const updateFeedback = {
      ...feedback,
      bad: feedback.bad + 1
    }
    setFeedback(updateFeedback)
  }


  return(
    <div>
      <h1>Give Feedback!</h1>
      <Button handleClick={handleGood} text='Good!'/>
      <Button handleClick={handleNeutral} text='Neutral'/>
      <Button handleClick={handleBad} text='Bad'/>
      <h1>Statistics</h1>
      Good: {feedback.good}<br/>
      Neutral: {feedback.neutral}<br/>
      Bad: {feedback.bad}<br/>
    </div>  
  )
}

export default App