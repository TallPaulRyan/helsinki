import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button> 
)

const StatisticLine = ({text, value}) => {
  return (
    <>
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
    </>
  )
}

const Statistics = ({feedback, stats}) => {
  if(stats.all === 0){
    return (
      <div>
        <h1>Statistics</h1>
        No feedback given.
      </div>
    )
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text='Good' value={feedback.good}/>
            <StatisticLine text='Neutral' value={feedback.neutral}/>
            <StatisticLine text='Bad' value={feedback.bad}/>
            <StatisticLine text='All' value={stats.all}/>
            <StatisticLine text='Average' value={stats.average}/>
            <StatisticLine text='Positive' value={stats.positive}/>
          </tbody>
        </table>
      </div>
    )
  }
}

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

  const handleStats = (fb) => {
    const total = fb.good + fb.neutral + fb.bad
    const updateStats = {
      all: total,
      average: parseFloat((fb.good - fb.bad) / total).toPrecision(2),
      positive: parseFloat(fb.good / total).toPrecision(2)
    }
    setStats(updateStats)
  }

  const handleGood = () => {
    const updateFeedback = {
      ...feedback,
      good: feedback.good + 1
    }
    setFeedback(updateFeedback)
    handleStats(updateFeedback)
  }

  const handleNeutral = () => {
    const updateFeedback = {
      ...feedback,
      neutral: feedback.neutral + 1
    }
    setFeedback(updateFeedback)
    handleStats(updateFeedback)
  }

  const handleBad = () => {
    const updateFeedback = {
      ...feedback,
      bad: feedback.bad + 1
    }
    setFeedback(updateFeedback)
    handleStats(updateFeedback)
  }

  return(
    <div>
      <h1>Give Feedback!</h1>
      <Button handleClick={handleGood} text='Good!'/>
      <Button handleClick={handleNeutral} text='Neutral'/>
      <Button handleClick={handleBad} text='Bad'/>
      <Statistics feedback={feedback} stats={stats}/>
    </div>  
  )
}

export default App