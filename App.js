import { useState } from 'react'

const Button = ({setGood, setNeutral, setBad, good, neutral, bad}) => {

  return (
    <div>
      <button onClick={() => setGood(good + 1)} >good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const total =  good + neutral + bad
  const average = (good - bad)/ total
  const positive =  (100/total) * good

  console.log(good, neutral, bad)

  if (total === 0)
    return (
    <div>
    <h1>statistics</h1>
    <p>No feedback given</p>
    </div>
  ) 
  
  else

  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={total}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positive}/>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td><td>{value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button setGood={setGood} setNeutral={setNeutral} setBad={setBad} good={good} neutral={neutral} bad={bad}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App