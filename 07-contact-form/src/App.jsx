import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppForm from './form/AppForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Contáctame</h1>
      <AppForm />
    </div>
  )
}

export default App
