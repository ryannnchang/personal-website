import { useState } from 'react'
import './index.css'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
    </div>
  )
}

export default App
