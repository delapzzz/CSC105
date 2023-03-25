import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import List from './Components/List'
import TypeMe from './Components/TypeMe'
import MyForm from './Components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <List />
      <TypeMe />
      <MyForm />
    </div>
  )
}

export default App
