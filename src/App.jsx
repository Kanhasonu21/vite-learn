import { useState } from 'react'
import './App.css'
import Test from './components/Test'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Test/>
      <HomePage/>
    </div>
  )
}

export default App
