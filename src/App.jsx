import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const choices = ['rock', 'paper', 'scissors']
  

  const handleClick = (value) => {
    setUserChoice(value)

    setTimeout(() => {
      generateCompChoice()
    }, 2000)
  }

  const generateCompChoice = () => {
    const randomNumber = Math.floor(Math.random() * choices.length)
    const randomChoice = choices[randomNumber]
    setComputerChoice(randomChoice)
    
  }

  useEffect(() => {
    checkResult()
  }, [computerChoice, userChoice])

  const checkResult = () => {
    switch(userChoice + computerChoice) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
        setResult('You win!')
        break

      case('paperscissors'):
        case('scissorsrock'):
        case('rockpaper'):
        setResult('You lose! ')
        break

        case('rockrock'):
        case('paperpaper'):
        case('scissorsscissors'):
        setResult('Its a draw! ')
        break
    }
  }

  return (
    <div>
      <h1>user choice is: {userChoice}</h1>
      <h1>computer choice is: {computerChoice} </h1>

      {choices.map((choice, index) => <button key={index} onChange={() => handleClick(choice)}>{choice}</button>
      )}
      <h1>{result}</h1>
    </div>
  )
}
