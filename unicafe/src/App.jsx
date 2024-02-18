import { useState } from 'react'

import Header from './components/Header'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const hasFeedback = good !== 0 || neutral !== 0 || bad !== 0;

  return (
    <div>
      <Header text="Give Feedback" />
      <div>
        <Button handleClick={ () => setGood(good + 1)} text="Good" />
        <Button handleClick={ () => setNeutral(neutral + 1)} text="Neutral" />
        <Button handleClick={ () => setBad(bad + 1)} text="Bad" />
      </div>
      <Header text="Statistics" />
      {
        hasFeedback ? (
          <Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
          />
        ) :
        <p>Not a single feedback given.</p>
      }
    </div>
  )
}

export default App