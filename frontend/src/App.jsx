import './index.css'
import Navbar from './components/Navbar'
import AnimatedBackground from './components/AnimatedBackground'
import Hero from './components/Hero'

function App() {
  return (

  <div className="relative z-0 min-h-screen w-full overflow-x-hidden">
  <AnimatedBackground />
  
  <main className="relative z-10">
    <Navbar />
    <Hero />
  </main>
  </div>
  )
}

export default App