import './index.css'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {

  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <Experience />
      <Contact/>
    </div>
  )
}

export default App
