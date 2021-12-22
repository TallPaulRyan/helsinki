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

  const [stats, setStats] = useState({
    all: 0,
    average: 0,
    positive: 0
  })

  const calculateStats = (fb) => {
    const totalFeedback = fb.good + fb.neutral + fb.bad
    const updateStats = {
      all: totalFeedback,
      average: parseFloat((fb.good - fb.bad) / totalFeedback).toPrecision(2),
      positive: parseFloat(fb.good / totalFeedback).toPrecision(2)
    }
    setStats(updateStats)
  }

  const handleGood = () => {
    const updateFeedback = {
      ...feedback,
      good: feedback.good + 1
    }
    setFeedback(updateFeedback)
    calculateStats(updateFeedback)
  }

  const handleNeutral = () => {
    const updateFeedback = {
      ...feedback,
      neutral: feedback.neutral + 1
    }
    setFeedback(updateFeedback)
    calculateStats(updateFeedback)
  }

  const handleBad = () => {
    const updateFeedback = {
      ...feedback,
      bad: feedback.bad + 1
    }
    setFeedback(updateFeedback)
    calculateStats(updateFeedback)
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
      All: {stats.all}<br/>
      Average: {stats.average}<br/>
      Positive: {stats.positive}<br/>
    </div>  
  )
}

export default App